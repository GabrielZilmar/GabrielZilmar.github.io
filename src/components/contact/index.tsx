import { Card, Typography, Button } from "@mui/material";
import {
  ContactContainer,
  ContactIntro,
  ContactMeta,
  ContactTitle,
  ContactWrapper,
  ContactCardContent,
  ContactSectionLabel,
} from "~/components/contact/styles";
import {
  LinkedIn as LinkedInIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material/";
import ContainerLayout from "~/components/layout/Container/Container";
import useNotification from "~/hooks/useNotification";
import { useLanguage } from "~/i18n/language-context";

const Contact: React.FC = () => {
  const { content } = useLanguage();
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
      url: "https://wa.me/5538999731516",
      name: "+55 (38) 99973-1516",
    },
    email: {
      url: "mailto:gabriel@zilmar.dev",
      name: "gabriel@zilmar.dev",
    },
  };
  const { emitInfo } = useNotification();

  const openWindow = (url: string, redirect = true) => {
    if (redirect) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.open(url, "_self");
    }
  };

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    emitInfo(content.contact.emailCopied);
  };

  return (
    <ContainerLayout id="contact" center={false}>
      <ContactContainer>
        <ContactIntro>
          <ContactSectionLabel variant="caption">
            {content.contact.label}
          </ContactSectionLabel>
          <ContactTitle variant="h3">{content.contact.title}</ContactTitle>
          <ContactMeta>{content.contact.description}</ContactMeta>
          <Button
            variant="contained"
            href={content.contact.resumeHref}
            target="_blank"
            rel="noreferrer"
            sx={{ alignSelf: "flex-start", mt: 1 }}
          >
            {content.contact.resumeButton}
          </Button>
        </ContactIntro>
        <ContactWrapper>
          <Card variant="outlined">
            <ContactCardContent
              onClick={() => openWindow(contactData.linkedin.url)}
            >
              <LinkedInIcon />
              <Typography>{contactData.linkedin.name}</Typography>
            </ContactCardContent>
          </Card>
          <Card variant="outlined">
            <ContactCardContent
              onClick={() => openWindow(contactData.github.url)}
            >
              <GitHubIcon />
              <Typography>{contactData.github.name}</Typography>
            </ContactCardContent>
          </Card>
          <Card variant="outlined">
            <ContactCardContent
              onClick={() => openWindow(contactData.phone.url)}
            >
              <PhoneIcon />
              <Typography>{contactData.phone.name}</Typography>
            </ContactCardContent>
          </Card>
          <Card variant="outlined">
            <ContactCardContent
              onClick={() => copyToClipboard(contactData.email.name)}
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
