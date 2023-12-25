import styled from '@emotion/styled';

export default function HomePage() {
  return (
    <div>
      <GreetingText>
        <CongBr>Congratulations!</CongBr>
          You are on a page where you can save your contacts. The security of
          your data will be ensured. Thank you for your trust!
      </GreetingText>
    </div>
  );
}

const GreetingText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  margin: 0 auto;
  color: #002244;
`;

const CongBr = styled.span`
  font-size: 25px;
  padding-bottom: 30px;
  font-weight: 700;
  color: #6495ed;
`;
