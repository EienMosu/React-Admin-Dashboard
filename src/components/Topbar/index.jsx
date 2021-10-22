import React from "react";
// Material UI Icons
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
// Styled Components
import {
  Avatar,
  AvatarContainer,
  Container,
  IconBadge,
  Icons,
  Left,
  Logo,
  Right,
  Wrapper,
} from "./Topbar.styles";
// Avatar Image
import avatar from "../../assets/avatar.jpg";

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>React Admin.</Logo>
        </Left>
        <Right>
          <Icons>
            <NotificationsNone />
            <IconBadge>2</IconBadge>
          </Icons>
          <Icons>
            <Language />
            <IconBadge>2</IconBadge>
          </Icons>
          <Icons>
            <Settings />
          </Icons>
          <AvatarContainer>
            <Avatar src={avatar} />
          </AvatarContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
