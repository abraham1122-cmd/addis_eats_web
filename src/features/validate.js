



export function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  } else if (form.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters.";
  }

  if (!form.phone.trim()) {
    errors.phone = "TeleBirr phone number is required.";
  } else if (!/^(09\d{8}|\+2519\d{8})$/.test(form.phone.trim())) {
    errors.phone = "Enter a valid TeleBirr number.";
  }

  if (!form.area.trim()) {
    errors.area = "Delivery area is required.";
  }

  return errors;
}