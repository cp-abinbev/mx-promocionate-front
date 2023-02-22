// Packages
import { map } from "lodash";

// Hooks
import useViews from "../../..";
import useControllers from "../../../../controllers";

const EventDetail = () => {
  const { useComponents, useLayouts } = useViews();
  const { Title, useInputs, Typography, useModals } = useComponents();
  const { CheckboxImg, SelectDefault, InputDate } = useInputs();
  const { PrivateContentLayout } = useLayouts();
  const { Preview, Download } = useModals();

  const { useScreenHooks } = useControllers();
  const { useBrandsControllers } = useScreenHooks();
  const { useEventDetail } = useBrandsControllers();
  const {
    optionsEvent,
    eventForm,
    date,
    setDate,
    postsOptions,
    handleCreateImage,
    showDate,
    showVigency,
    title,
    subtitle,
    selectEventTypes,
    dateInput,
    validitySince,
    validityUntil,
    poster,
    imgMobile,
    imgTablet,
    imgDesktop,
    showPreview,
    setShowPreview,
    showDownload,
    setShowDownload,
    goHome,
    objectData,
    previewModalButton,
    previewModalTitle,
    previewModalText,
    previewTitle,
    backLink,
    buttonDownload,
  } = useEventDetail();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = eventForm;

  return (
    <PrivateContentLayout
      showBack
      isEvent
      showImageBrand={optionsEvent?.event}
      imgMobile={imgMobile}
      imgTablet={imgTablet}
      imgDesktop={imgDesktop}
    >
      <form className="space-y-4 w-[300px] mx-auto xs:w-[400px]">
        <Title
          title={title[0]?.title}
          text={subtitle[0]?.title}
          classNameTitle="mb-[10px]"
          className="mb-[5px]"
        />
        <SelectDefault
          name="optionsEvent"
          label={selectEventTypes[0]?.title}
          control={control}
          options={optionsEvent?.event_types}
          errors={errors}
          maxWidth="xs:!w-[400px]"
        />

        {showDate && (
          <InputDate
            name="date"
            control={control}
            errors={errors}
            placeHolderText="DD/MM/AAAA HH:MM:SS"
            dateFormat="dd/MM/yyyy h:mm aa"
            showTimeSelect={true}
            label={dateInput[0]?.title}
            disabled={false}
          />
        )}

        {showVigency && (
          <div className="flex gap-[20px] mb-12">
            <InputDate
              name="since"
              control={control}
              errors={errors}
              placeHolderText="DD/MM/AAAA"
              dateFormat="dd/MM/yyyy"
              showTimeSelect={false}
              label={validitySince[0]?.title}
              date={date}
              setDate={setDate}
              brandForm={eventForm}
              disabled={false}
            />
            <InputDate
              name="until"
              control={control}
              errors={errors}
              placeHolderText="DD/MM/AAAA"
              dateFormat="dd/MM/yyyy"
              showTimeSelect={false}
              label={validityUntil[0]?.title}
              date={date}
              disabled={false}
            />
          </div>
        )}

        {postsOptions.length > 0 && isValid && (
          <div className="mb-2">
            <Typography className="font-workSans w-80 md:w-full">
              {poster[0]?.title}
            </Typography>
            <div className="flex gap-5 overflow-x-scroll w-[20rem] xs:w-[26rem]">
              {map(postsOptions, (post, i) => (
                <CheckboxImg
                  key={post.id}
                  name="post"
                  number={i + 1}
                  control={control}
                  img={post.url_img}
                  value={post.id}
                  checkImg={() => {
                    if (isValid) {
                      handleSubmit(handleCreateImage)();
                      setShowPreview(true);
                    }
                  }}
                  namePost={post.name}
                />
              ))}
            </div>
          </div>
        )}
      </form>
      {showPreview && (
        <Preview
          closeModal={setShowPreview}
          closeDownload={setShowDownload}
          goHome={goHome}
          data={objectData}
          text={{ previewTitle, buttonDownload, backLink }}
        />
      )}
      {showDownload && (
        <Download
          closeModal={setShowDownload}
          goHome={goHome}
          data={{
            previewModalButton,
            previewModalText,
            backLink,
            previewModalTitle,
          }}
        />
      )}
    </PrivateContentLayout>
  );
};

export default EventDetail;
