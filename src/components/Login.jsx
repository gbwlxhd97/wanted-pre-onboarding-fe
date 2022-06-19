import styled from 'styled-components';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import AUTHDB from '../data/auth';

const Login = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const [inputs,setInputs] = useState({
    id: '',
    pw: ''
  });
  const {id,pw} = inputs;

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const newSignInForm = {
      ...inputs,
      id: idRef.current.value,
      pw: pwRef.current.value,
    };
    setInputs(newSignInForm);
    if (
      AUTHDB.id === idRef.current.value &&
      AUTHDB.pw === pwRef.current.value
    ) {
      alert('로그인 성공');
      localStorage.setItem('userId', idRef.current.value);
    } else {
      alert('로그인 실패');
    }
  }, []);
  console.log(AUTHDB);
  return (
    <Container>
      <Wrapper>
        <Logo>로고자리</Logo>
        <FormContainer onSubmit={onSubmit}>
          <InputContainer>
            <Input
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="id"
              ref={idRef}
            />
          </InputContainer>
          <InputContainer>
            <Input placeholder="비밀번호" name="pw" ref={pwRef} />
          </InputContainer>
          <Button>로그인</Button>
        </FormContainer>
        <DivideWrap>
          <DivideLine></DivideLine>
          <DivideText>또는</DivideText>
          <DivideLine></DivideLine>
        </DivideWrap>
        <Wrap>
          <div>로고</div>
          <div>페이스북으로 로그인</div>
        </Wrap>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #e7e7e7;
  height: 100vh;
`;

const Wrapper = styled.div`
  border: 1px solid #d3d3d3;
  max-width: 600px;
  margin: 0 auto;
  padding: 50px;
`;

const Logo = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

const FormContainer = styled.form``;

const InputContainer = styled.div`
  border: 1px solid #d3d3d3;
  margin-top: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 8px;
  background-color: #f8f8f8;
`;

const Button = styled.button`
  margin-top: 20px;
  background-color: #aed9fb;
  color: #D0EAF7;
  border-radius: 8px;
  width: 100%;
  padding: 6px 0;
  cursor: pointer;
`;

const DivideWrap = styled.div`
  margin-top: 20px;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

const DivideText = styled.div`
  color: gray;
`;

const DivideLine = styled.div`
  border: 1px solid #d3d3d3;
  width: 30%;
`;

const Wrap = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Login;