export const getGtmArgs = ({
  id,
  event,
  event_category,
  event_action = "",
  event_label = "",
  interaction,
  component_name,
  element_text,
  product,
  sku,
  userUid,
}) => {
  return {
    gtmId: id,
    dataLayer: {
      event,
      event_category,
      event_action,
      event_label,
      interaction,
      component_name,
      element_text,
      product,
      sku,
      userUid,
    },
  };
};
