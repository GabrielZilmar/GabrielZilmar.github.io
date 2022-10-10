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
  GitHub as GitHubIcon,
} from "@mui/icons-material/";
import ContainerLayout from "~/components/layout/Container/Container";
import useNotification from "~/hooks/useNotification";

const Contact: React.FC = () => {
  const contactData = {
    linkedin: {
      url: "https://www.linkedin.com/in/gabrielzilmar/",
      name: "gabrielzilmar",
    },
    github: {
      url: "https://github.com/GabrielZilmar",
      name: "GabrielZilmar",
    },
    phone: {
      url: "tel:+55-38-999731516",
      name: "+55 (38) 99973-1516",
    },
    email: {
      url: "gabriel@zilmar.dev",
      name: "gabriel@zilmar.dev",
    },
  };
  const { emitInfo } = useNotification();

  const openWindow = (url: string, redirect = true) => {
    if (redirect) {
      window.open(url);
    } else {
      window.open(url, "_self");
    }
  };

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    emitInfo("Email copied to clipboard!");
  };

  return (
    <ContainerLayout id="contact" center={false}>
      <ContactContainer>
        <ContactTitle variant="h3">CONTACT</ContactTitle>
        <ContactWrapper>
          <Card>
            <ContactCardContent
              onClick={() => openWindow(contactData.linkedin.url)}
            >
              <LinkedInIcon />
              <Typography>{contactData.linkedin.name}</Typography>
            </ContactCardContent>
          </Card>
          <Card>
            <ContactCardContent
              onClick={() => openWindow(contactData.github.url)}
            >
              <GitHubIcon />
              <Typography>{contactData.github.name}</Typography>
            </ContactCardContent>
          </Card>
          <Card>
            <ContactCardContent
              onClick={() => openWindow(contactData.phone.url, false)}
            >
              <PhoneIcon />
              <Typography>{contactData.phone.name}</Typography>
            </ContactCardContent>
          </Card>
          <Card>
            <ContactCardContent
              onClick={() => copyToClipboard(contactData.email.url)}
            >
              <EmailIcon />
              <Typography>{contactData.email.name}</Typography>
            </ContactCardContent>
          </Card>
        </ContactWrapper>
      </ContactContainer>
    </ContainerLayout>
  );
};

export default Contact;
