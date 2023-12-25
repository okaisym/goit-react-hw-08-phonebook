import { DeleteBtn, ListItem, NumberSpan } from "./ContactItem.styled";

export const Item = ({ name, number, id, onClick }) => {
    return (
      <ListItem>
        <span>
          {name}: <NumberSpan>{number}</NumberSpan>
        </span>
        <DeleteBtn onClick={() => onClick({ id, name, number })}>
          Delete
        </DeleteBtn>
      </ListItem>
    );
  };
