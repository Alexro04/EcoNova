import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSetting from "./useSettings";
import useUpdateSettings from "./useUpdateSettings";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  const { isLoading, settings } = useSetting;
  const { isUpdating } = useUpdateSettings();

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={settings?.minNightsPerBooking}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={settings?.maxNightsPerBooking}
        />
      </FormRow>
      <FormRow label="Booking Limit">
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          defaultValue={settings?.bookingLimit}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          defaultValue={settings?.breakfastPrice}
        />
      </FormRow>
      <FormRow label="Maximum days to book ahead">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdating}
          defaultValue={settings?.bookingWindow}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
