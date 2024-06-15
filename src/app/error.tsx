'use client';
import { NextPage } from 'next';

const Custom500: NextPage = () => {
  return (
    <div>
      <h1>500 - Server-side error occurred</h1>
      <p>アクセスが拒否されました。許可されたメールアドレスを使用してログインしてください。</p>
    </div>
  );
};

export default Custom500;
