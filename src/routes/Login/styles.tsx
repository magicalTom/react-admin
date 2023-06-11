import styled from 'styled-components';

const bgUrl = new URL('../../assets/login/bg.jpg', import.meta.url).href;

export const Wrapper = styled.div`
  height: 100vh;
  background-image: linear-gradient(120deg, #d2c1fd, #c8e4f0);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 70%;
  height: 500px;
  border-radius: 20px;
  box-shadow: -10px -10px 50px 10px rgb(255, 255, 255), 10px 10px 50px 0 rgba(0, 0, 0, 0.4);
  background-color: white;
  display: flex;
  overflow: hidden;
`;

export const Image = styled(
  (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => (
    <img src={bgUrl} {...props} />
  )
)({
  width: '30%',
  height: '100%',
});

export const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 200px;
  box-sizing: border-box;
  background-image: linear-gradient(140deg, white, #d2c1fd7c);
`;

export const Input = styled(
  (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => (
    <input autoComplete='off' {...props} />
  )
)({
  borderRadius: '5px',
  width: '100%',
  height: '36px',
  border: '1px solid #acacac',
  padding: '0 10px',
  marginBottom: '20px',
  boxSizing: 'border-box',
  ':focus': {
    outline: 'none',
  },
});
