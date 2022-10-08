import { Card, Typography } from "@mui/material";
import {
  ContactContainer,
  ContactTitle,
  ContactWrapper,
  ContactCardContent,
} from "~/components/contact/styles";
import {
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
} from "@mui/icons-material/";
import ContainerLayout from "~/components/layout/Container/Container";

const Contact: React.FC = () => {
  const openWindow = (url: string, redirect = true) => {
    if (redirect) {
      window.open(url);
    } else {
      window.open(url, "_self");
    }
  };

  return (
    <ContainerLayout id="contact" center={false}>
      <ContactContainer>
        <ContactTitle variant="h3">CONTACT</ContactTitle>
        <ContactWrapper>
          <Card>
            <ContactCardContent
              onClick={() =>
                openWindow("https://www.linkedin.com/in/gabrielzilmar/")
              }
            >
              <LinkedInIcon />
              <Typography>{"gabrielzilmar"}</Typography>
            </ContactCardContent>
          </Card>
          <Card>
            <ContactCardContent
              onClick={() => openWindow("tel:+55-38-999731516", false)}
            >
              <PhoneIcon />
              <Typography>{"+55 (38) 99973-1516"}</Typography>
            </ContactCardContent>
          </Card>
          <Card>
            <ContactCardContent>
              <EmailIcon />
              <Typography>{"gabriel@zilmar.dev"}</Typography>
            </ContactCardContent>
          </Card>
        </ContactWrapper>
      </ContactContainer>
    </ContainerLayout>
  );
};

export default Contact;
