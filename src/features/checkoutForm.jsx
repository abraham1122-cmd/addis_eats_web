import { useRef, useState } from "react";
import Field from "./field";
import { validate } from "./validate";
import { placeOrder } from "../orders/orderApi";
import useCartStore from "../Cart/cartStore";

import DeliveryFee from "../utils/deliveryFee";
import DeliveryTime from "../utils/deliveryTime";


function Checkout() {
  const items = useCartStore((state) => state.items);

  // const total = items.reduce(
  //   (sum, item) => sum + item.price * item.count,
  //   0
  // );

  const subtotal = items.reduce(
  (sum, item) => sum + Number(item.price) * Number(item.count),
  0
);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    notes: "",
  });

  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState("");
  const [serverFieldErrors, setServerFieldErrors] = useState({});

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const areaRef = useRef(null);

  const clientErrors = validate(form);

  const errors = {
    ...clientErrors,
    ...serverFieldErrors,
  };

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    setServerError("");
    setSuccess("");

    setServerFieldErrors((current) => ({
      ...current,
      [name]: undefined,
    }));
  }

  function handleBlur(e) {
    const { name } = e.target;

    setTouched((current) => ({
      ...current,
      [name]: true,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setServerError("");
    setSuccess("");
    setServerFieldErrors({});

    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setTouched({
        name: true,
        phone: true,
        area: true,
      });

      if (validationErrors.name) {
        nameRef.current?.focus();
      } else if (validationErrors.phone) {
        phoneRef.current?.focus();
      } else if (validationErrors.area) {
        areaRef.current?.focus();
      }

      return;
    }

    if (items.length === 0) {
      setServerError("Your cart is empty.");
      return;
    }

    setSubmitting(true);

    try {

      const deliveryFee = Number(DeliveryFee(form.area));
      const deliveryTime = DeliveryTime(form.area);

      const total = subtotal + deliveryFee;
      
      const orderData = {
        customer: {
          name: form.name,
          phone: form.phone,
          area: form.area,
        },
        notes: form.notes,
        items: items,
        payment: "TeleBirr",

        subtotal: subtotal,
        deliveryFee: deliveryFee,
        deliveryTime: deliveryTime,

        total: total
      };

      const result = await placeOrder(orderData);

      setSuccess(
        result.message || "Your Order is placed successfully. Keep choosing us!"
      );

      setForm({
        name: "",
        phone: "",
        area: "",
        special_instruction: "",
        notes: "",

      });

      setTouched({});
    } catch (error) {
      if (error.status === 422) {
        const fieldErrors = error.fieldErrors || {};

        setServerFieldErrors(fieldErrors);

        setTouched((current) => ({
          ...current,
          ...Object.fromEntries(
            Object.keys(fieldErrors).map((field) => [
              field,
              true,
            ])
          ),
        }));

        const firstBadField = Object.keys(fieldErrors)[0];

        if (firstBadField === "name") {
          nameRef.current?.focus();
        } else if (firstBadField === "phone") {
          phoneRef.current?.focus();
        } else if (firstBadField === "area") {
          areaRef.current?.focus();
        }
      } else {
        setServerError(
          "We couldn't place your order. Please try again."
        );
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="checkout">
      <h1>Checkout</h1>

      {serverError && (
        <p role="alert" className="form-error">
          {serverError}
        </p>
      )}

     






      <form onSubmit={handleSubmit} noValidate>
        <Field
          id="name"
          label="Full name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
          touched={touched.name}
          placeholder="Enter your name"
        />

        <Field
          id="phone"
          label="TeleBirr phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.phone}
          touched={touched.phone}
          placeholder="09** must be 10 digits"
        />

        <Field
          id="area"
          label="Delivery area"
          value={form.area}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.area}
          touched={touched.area}
          select
        >
          <option value="">Select Your Area</option>
          <option value="Jacros">Jacros</option>
          <option value="Megenagna">Megenagna</option>
          <option value="Piasa">Piasa</option>
          <option value="Kasanchis">Kasanchis</option>
          <option value="Bole">Bole</option>
          <option value="Other">Other</option>
        </Field>





       <textarea
          
          id="special_instruction"
          label="special instruction"
          type="textarea"
          value={form.special_instruction}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Write Special Instructions"
          
        />

     
        <Field
          id="notes"
          label="Delivery notes"
          type="textarea"
          value={form.notes}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Optional delivery instructions"
          optional
        />

        <button type="submit" disabled={submitting}>
          {submitting
            ? "Placing order..."
            : `Place Order ${subtotal} ETB`}
        </button>


 {success && (
        <p role="alert" className="form-success">
          {success}
        </p>
      )}

      </form>
    </section>
  );
}

export default Checkout;