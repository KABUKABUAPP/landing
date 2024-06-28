import AppStoreButton from "@/components/common/AppStoreButton";
import Container from "@/components/common/Container";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button/Button";
import TextField from "@/components/ui/Input/TextField/TextField";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useSubmitReferralsFormMutation } from "@/api-services/referrals";
import { useModalContext } from "@/contexts/ModalContext";


const JumbotronRef: FC = () => {
  const { setModalContent } = useModalContext();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const referralCode = router.query.id;
  const type = router.query.type;

  const [submitForm, { isLoading, isSuccess, isError, error }] =
    useSubmitReferralsFormMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Email saved Successfully");
      if(type === 'rider') {
        router.push('https://kabukaburider.page.link/app')
      } else {
        router.push('https://kabukabudriver.page.link/app')
      }
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      if ("data" in error) {
        const { message }: any = error.data;
        toast.error(message);
      }
    }
  }, [error]);

  return (
    <>
      <div className={`min-h-[85vh] ${styles.jumboContainer}`}>
        <img src="/home/jumbo-bg.png" style={{ display: "none" }} />
        <Container>
          <div className="flex-col pt-20 h-[80vh] min-h-[500px] px-2">
            <motion.div
              initial={{ translateY: 185, opacity: 0 }}
              whileInView={{
                translateY: 0,
                opacity: 1,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="h-[40%]"
            >
              <div className="mb-3 flex justify-center"><Logo /></div>
              <p className="text-center font-bold text-4xl">
                Unlock Exclusive Deals
              </p>
              <p className="text-center font-bold text-md sm:flex-row w-[90%] sm:w-[60%] lg:w-[40%] mx-auto">
                Welcome to KabuKabu! Enter your email to claim <br /> exclusive promo deals and get started today.
              </p>
              <div className="flex flex-col sm:flex-row w-[90%] sm:w-[60%] lg:w-[40%] mx-auto justify-center gap-6 mt-6 max-sm:gap-2">
                <div className="w-full sm:w-[70%]">
                  <TextField
                    label="Enter Email"
                    placeholder="Enter here"
                    className="bg-[#FFF]"
                    value={email}
                    onChange={(e) => {
                        setEmail(e?.target?.value)
                    }}
                  />
                </div>
                <div className="w-full sm:w-[30%] flex items-center justify-center">
                  <Button
                    title={'Get The App'}
                    className="!text-sm mt-6 w-full"
                    size="medium"
                    loading={isLoading} 
                    disabled={isLoading}
                    onClick={() => {
                      
                      if (email.length === 0) {
                        return toast.error('Please enter email');
                      } else {
                        submitForm({email, code: referralCode});
                      }
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
      <div className={`h-[30vh] min-h-[100px] max-sm:h-[100px] ${styles.jumboGradient}`}></div>
    </>
  );
};

export default JumbotronRef;
