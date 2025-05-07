import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSetting from "./useSettings";
import useUpdateSettings from "./useUpdateSettings";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minNightsPerBooking,
      maxNightsPerBooking,
      bookingLimit,
      bookingWindow,
      breakfastPrice,
    } = {},
  } = useSetting();
  const { isUpdating, updateSettings } = useUpdateSettings();

  function handleUpdate(e, key) {
    const value = e.target.value;
    updateSettings({ [key]: value });
  }

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minNightsPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minNightsPerBooking")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={maxNightsPerBooking}
          onBlur={(e) => handleUpdate(e, "maxNightsPerBooking")}
        />
      </FormRow>
      <FormRow label="Booking Limit">
        <Input
          type="number"
          id="booking-limit"
          disabled={isUpdating}
          defaultValue={bookingLimit}
          onBlur={(e) => handleUpdate(e, "bookingLimit")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
      <FormRow label="Maximum days to book ahead">
        <Input
          type="number"
          id="booking-window"
          disabled={isUpdating}
          defaultValue={bookingWindow}
          onBlur={(e) => handleUpdate(e, "bookingWindow")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
