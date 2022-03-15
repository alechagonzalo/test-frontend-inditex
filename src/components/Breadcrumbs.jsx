import { Link, Link as RouterLink } from "react-router-dom";
import { Typography } from "./Typography";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import styled from "styled-components";

import useMediaQuery from "@/hooks/media-query/useMediaQuery";
import routes from "@/utils/routes";
import { device } from "@/styles/device";

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const LinkRouterStyled = styled(LinkRouter)(() => ({
  fontSize: "1rem",
  textDecoration: "none",
}));

const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  @media ${device.mobileM} {
    flex-direction: row;
    align-items: center;
  }
`;

const BreadcrumbItem = styled(Typography)`
  padding-right: ${({ theme }) => theme.spacing(0.5)};

  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.lightPrimary};
  }

  margin: ${({ theme }) => theme.spacing(0.5)};
  @media ${device.mobileM} {
    margin: 0;
  }
`;

export const BreadcrumbsComponent = () => {
  const breadcrumbs = useBreadcrumbs(routes);
  const isMobileM = useMediaQuery("(max-width: 375px)");
  const isMobileL = useMediaQuery("(max-width: 425px)");
  const fontSize = isMobileM
    ? "subtitle4"
    : isMobileL
    ? "subtitle3"
    : "subtitle1";

  return (
    <BreadcrumbContainer>
      {breadcrumbs.map(({ breadcrumb, icon }, i) => {
        const last = i === breadcrumbs.length - 1;
        const name = breadcrumb.props.children;

        const dividerChar = last ? "" : "/ ";

        return (
          <LinkRouterStyled
            underline="hover"
            color="inherit"
            key={breadcrumb.key}
            to={breadcrumb.key}
          >
            <BreadcrumbItem fontSize={fontSize} key={breadcrumb.key}>
              {icon ? icon : `${name}`}
              {` ${dividerChar}`}
            </BreadcrumbItem>
          </LinkRouterStyled>
        );
      })}
    </BreadcrumbContainer>
  );
};
