import { CartItem } from "../../components/cart-Item/CartItem";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { removeFromCart } from "../../store/slices/cart-slice";

import { Typography } from "@mui/material";

export const CartPage = () => {
  const dispatch = useAppDispatch();
  const { itemsInCart } = useAppSelector((state) => state.cart);
  const removeFromCartHandler = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = itemsInCart.reduce((acc, item) => {
    acc += item.price;
    return acc;
  }, 0);

  if (itemsInCart.length === 0) return <div>Cart is empty :(</div>;

  return (
    <>
      <div className="flex gap-6 mb-8 flex-wrap">
        {itemsInCart.map((game) => (
          <CartItem
            key={game.id}
            game={game}
            removeFromCart={removeFromCartHandler}
          />
        ))}
      </div>
      <Typography className="font-bold text-center">
        Total price: {totalPrice.toFixed(2)} $
      </Typography>
    </>
  );
};
