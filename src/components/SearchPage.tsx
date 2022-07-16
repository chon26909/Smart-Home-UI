import { Input } from "@nextui-org/react";
import { FC } from "react";
import styled from "styled-components";

const SearchWapper = styled.div`
  width: 500px;
`;

const IconSearch = styled.div`
  width: 30px;
  color: gray;
`;

const SearchPage: FC = () => {
  return (
    <SearchWapper>
      <Input
        fullWidth
        bordered
        color="primary"
        clearable
        contentRightStyling={false}
        placeholder="ค้นหาอะไรบางอย่าง"
        contentRight={
          <IconSearch>
            <i className="fa-solid fa-magnifying-glass"></i>
          </IconSearch>
        }
      />
    </SearchWapper>
  );
};

export default SearchPage;
