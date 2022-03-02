import { Link, Link as RouterLink } from "react-router-dom";
import { Typography } from "./Typography";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import styled from "styled-components";
import useMediaQuery from "@/hooks/useMediaQuery";
import routes from "@/utils/routes";

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const LinkRouterStyled = styled(LinkRouter)(({ theme }) => ({
  fontSize: "1rem",
  textDecoration: "none",
  color: theme.colors.primary,
}));

const BreadcrumbContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const BreadcrumbItem = styled(Typography)`
  padding-right: ${({ theme }) => theme.spacing(0.5)};
`;

export const BreadcrumbsComponent = () => {
  const breadcrumbs = useBreadcrumbs(routes);
  const isMobile = useMediaQuery("(max-width: 425px)");

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
            <BreadcrumbItem
              fontSize={isMobile ? "subtitle3" : "subtitle1"}
              key={breadcrumb.key}
            >
              {icon ? icon : `${name}`}
              {` ${dividerChar}`}
            </BreadcrumbItem>
          </LinkRouterStyled>
        );
      })}
    </BreadcrumbContainer>
  );
};
