import styled from "styled-components";
import { useGetCategories } from "@/hooks/useGetCategories";

interface DeviceFilterProps {
  selected: string;
  onChange: (value: string) => void;
}

export default function DeviceFilter({
  selected,
  onChange,
}: DeviceFilterProps) {
  const { categories } = useGetCategories();

  if (!categories || categories.length === 0) {
    return (
      <FilterWrapper>
        <LoadingText>불러오는 중...</LoadingText>
      </FilterWrapper>
    );
  }

  return (
    <FilterWrapper>
      <FilterButton
        $active={selected === "all"}
        onClick={() => onChange("all")}
      >
        전체
      </FilterButton>

      {categories.map((category) => (
        <FilterButton
          key={category.id}
          $active={selected === category.type}
          onClick={() => onChange(category.type)}
        >
          {category.name}
        </FilterButton>
      ))}
    </FilterWrapper>
  );
}

const FilterWrapper = styled.nav`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;

  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 4px; 
`;

const LoadingText = styled.span`
  color: #999;
  font-size: 14px;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  border: 1px solid #eee;
  cursor: pointer;
  background: ${({ $active }) => ($active ? "#225EA2" : "#fff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#222")};
  transition: all 0.2s ease;
`;
