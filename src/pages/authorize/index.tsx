'use client';

import { useState } from 'react';
import Image from 'next/image';

import styles from './styles.module.css';

import EmailIcon from '@/assets/envelope-light.svg';
import PasswordIcon from '@/assets/lock-light.svg';
import EyeIcon from '@/assets/eye-solid.svg';
import EyeSlashIcon from '@/assets/eye-slash-solid.svg';

export default function Authorize() {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  return (
    <div className={styles.container}>
      <div className={styles.authorization_wrapper}>
        <Image
          className={styles.logo}
          src={'/logo.svg'}
          alt={'Happysync'}
          width={180}
          height={38}
          priority
        />
        <div className={styles.label}>
          해피싱크 어드민 페이지 관리자 로그인
        </div>
        <div className={styles.description}>
          해피싱크 관리자로 로그인 하시면 최초 계정 승인 작업이 필요합니다.
          <br />
          계정 승인이 완료 된 이후 OTP를 통한 2차 인증이 필요합니다.
        </div>
        <Image
          className={styles.google_login_button}
          src={'/image/google_login.svg'}
          alt={'Login Button'}
          width={270}
          height={57}
          priority
        />
        <div className={styles.division}>
          또는
        </div>
        <div className={styles.input_wrapper}>
          <EmailIcon className={styles.input_before_icon} />
          <input className={styles.input_block} type={'text'} placeholder={'Email'} />
        </div>
        <div className={styles.input_wrapper}>
          <PasswordIcon className={styles.input_before_icon} />
          <input className={styles.input_block} type={hidePassword ? 'password' : 'text'} placeholder={'Password'} />
          {hidePassword ? <EyeSlashIcon className={styles.input_after_icon} onClick={()=> setHidePassword(false)} /> :
            <EyeIcon className={styles.input_after_icon} onClick={()=> setHidePassword(true)} />}
        </div>
        <button className={styles.login_button}>
          LOGIN
        </button>
      </div>
    </div>
  );
}