import { Link, Link as RouterLink } from "react-router-dom";
import { Typography } from "./Typography";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import styled from "styled-components";

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const LinkRouterStyled = styled(LinkRouter)(({ theme }) => ({
  fontSize: "1rem",
  textDecoration: "none",
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
  const breadcrumbs = useBreadcrumbs();

  return (
    <BreadcrumbContainer>
      {breadcrumbs.map(({ breadcrumb }, i) => {
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
              color="text.primary"
              fontSize="subtitle2"
              key={breadcrumb.key}
            >
              {`${name} ${dividerChar} `}
            </BreadcrumbItem>
          </LinkRouterStyled>
        );
      })}
    </BreadcrumbContainer>
  );
};
