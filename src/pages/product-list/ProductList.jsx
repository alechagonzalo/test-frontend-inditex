import { useTranslations } from "@/i18n/translations.hook";
import { ProductItem } from "@/components/ProductItem";
import { Search } from "@/components/Search";
import { Skeleton } from "@/components/Skeleton";
import { GoTop } from "@/components/GoTop";
import { Typography } from "@/components/Typography";
import { ListContainer, NavBar, ProductsContainer } from "./styles";
import { useProductList } from "./ProductList.hook";

const SkeletonList = () => {
  return (
    <>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </>
  );
};

export const ProductList = () => {
  const { language } = useTranslations();

  const { filteredProducts, isLoading, handleFilter, filter } =
    useProductList();

  return (
    <ListContainer>
      <NavBar>
        <Search
          onChange={handleFilter}
          title={language.productList.select.search}
        />
      </NavBar>
      <ProductsContainer>
        {!isLoading ? (
          <>
            {filteredProducts.map((item) => {
              return <ProductItem item={item} key={item.id} />;
            })}
          </>
        ) : (
          <SkeletonList />
        )}
      </ProductsContainer>
      {filteredProducts.length === 0 && filter !== "" && (
        <Typography fontSize="h4">{language.productList.noResults}</Typography>
      )}
      <GoTop />
    </ListContainer>
  );
};
