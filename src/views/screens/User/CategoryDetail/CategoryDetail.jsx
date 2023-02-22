// Packages
import { map } from "lodash";

// Hooks
import useViews from "../../..";
import useControllers from "../../../../controllers";

const CategoryDetail = () => {
  const { useComponents, useLayouts } = useViews();
  const { Title, useInputs, Typography, useModals } = useComponents();
  const { Preview, Download } = useModals();
  const { CheckboxImg, SelectDefault, InputCurrency, InputDate } = useInputs();
  const { PrivateContentLayout } = useLayouts();

  const { useScreenHooks } = useControllers();
  const { useBrandsControllers } = useScreenHooks();
  const { useBrandDetail } = useBrandsControllers();
  const {
    brandForm,
    campaignTypeOptions,
    presentationsOptions,
    postsOptions,
    labelPrice,
    handleCreateImage,
    brandSelect,
    isBottle,
    date,
    setDate,
    isDisponibility,
    titleDetail,
    subtitleDetail,
    campaignTypeSelectedDetails,
    presentationSelectDetail,
    posterSelectTitleDetail,
    validityDetail,
    validitySinceDetail,
    validityUntilDetail,
    priceBotleDetail,
    imgMobile,
    imgTablet,
    imgDesktop,
    currency,
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
  } = useBrandDetail();

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = brandForm;

  return (
    <PrivateContentLayout
      showBack
      showImageBrand={brandSelect}
      imgMobile={imgMobile}
      imgTablet={imgTablet}
      imgDesktop={imgDesktop}
    >
      <form className="space-y-4 w-[300px] mx-auto xs:w-[400px]">
        <Title
          title={`${titleDetail[0]?.title}`}
          text={`${subtitleDetail[0]?.title}`}
        />
        <SelectDefault
          name="campaignType"
          label={`${campaignTypeSelectedDetails[0]?.title}`}
          control={control}
          options={campaignTypeOptions}
          errors={errors}
          maxWidth="xs:!w-[400px]"
        />
        <SelectDefault
          name="presentation"
          label={presentationSelectDetail[0]?.title}
          control={control}
          options={presentationsOptions}
          errors={errors}
          disabled={!watch("campaignType")}
          maxWidth="xs:!w-[400px]"
        />

        <InputCurrency
          name="price"
          control={control}
          label={labelPrice()}
          errors={errors}
          disabled={!watch("presentation")}
          currency={currency}
        />

        {isBottle && (
          <InputCurrency
            name="price_bottle"
            control={control}
            label={`${priceBotleDetail[0]?.title}`}
            errors={errors}
            disabled={!watch("presentation")}
            currency={currency}
          />
        )}

        {isDisponibility && (
          <div>
            <Typography className="font-workSans mb-[4px] ">
              {validityDetail[0]?.title}
            </Typography>
            <div className="flex gap-[20px] mb-12">
              <InputDate
                name="since"
                control={control}
                errors={errors}
                placeHolderText="DD/MM/AAAA"
                dateFormat="dd/MM/yyyy"
                showTimeSelect={false}
                label={`${validitySinceDetail[0]?.title}`}
                date={date}
                setDate={setDate}
                brandForm={brandForm}
                disabled={!watch("presentation")}
              />
              <InputDate
                name="until"
                control={control}
                errors={errors}
                placeHolderText="DD/MM/AAAA"
                dateFormat="dd/MM/yyyy"
                showTimeSelect={false}
                label={`${validityUntilDetail[0]?.title}`}
                date={date}
                disabled={!watch("presentation")}
              />
            </div>
          </div>
        )}
        {postsOptions.length > 0 && isValid && (
          <div className="mb-2">
            <Typography className="font-workSans w-80 md:w-full">
              {posterSelectTitleDetail[0]?.title}
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

export default CategoryDetail;
