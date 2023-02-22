// Packages
import { map } from "lodash";
import iconFilterDesktop from "../../../../assets/filterWhite.svg";
import lupe from "../../../../assets/lupeSearch.svg";

// Hooks
import useViews from "../../../";
import useControllers from "../../../../controllers";

const Categories = () => {
  const { useComponents, useLayouts } = useViews();
  const { Title, ListCategory, useModals } = useComponents();
  const { PrivateContentLayout } = useLayouts();
  const { Filter } = useModals();

  const { useScreenHooks, useGeneralHooks } = useControllers();
  const { useDataLayers } = useGeneralHooks();
  const { gtmClickHamburguer } = useDataLayers();
  const { useBrandsControllers } = useScreenHooks();
  const { useCategories, useFilters } = useBrandsControllers();
  const {
    categories,
    events,
    goToBrand,
    goToEvent,
    titleCategories,
    subtitleCategories,
    imgMobile,
    imgTablet,
    imgDesktop,
    eventsConfig,
    titlePopUpEvents,
    resetAllSearchsAndFilters,
  } = useCategories();
  const {
    brands,
    presentations,
    selectedFiltersLength,
    filterOpen,
    toggleFilters,
    handleOpenFilters,
    handleApplyFilters,
    handleResetFilters,
    handleFilterPresentations,
    totalFilters,
    showSearcher,
  } = useFilters();

  return (
    <PrivateContentLayout
      imgMobile={imgMobile}
      imgTablet={imgTablet}
      imgDesktop={imgDesktop}
      resetAllSearchsAndFilters={resetAllSearchsAndFilters}
      iconFilter={{
        icon: iconFilterDesktop,
        fun: () => handleOpenFilters(false),
      }}
      iconSearch={{ icon: lupe, fun: () => handleOpenFilters(true) }}
      gtmIcon={() => gtmClickHamburguer()}
    >
      {totalFilters === 0 && (
        <Title
          title={`${titleCategories[0]?.title}`}
          text={`${subtitleCategories[0]?.title}`}
          classNameTitle="ml-21 mb-[15px] mt-0"
          className="ml-21 mb-[20px]"
        />
      )}

      {totalFilters > 0 && (
        <p className="font-workSans text-[14px] my-[18px] px-6">
          Estos son los resultados de los filtros que aplicaste:
        </p>
      )}

      {events?.Eventos?.length === 0 && categories?.length === 0 && (
        <p className="text-center font-workSans">
          No se encontraron resultados
        </p>
      )}

      {eventsConfig[0]?.data && events?.Eventos?.length > 0 && (
        <ListCategory
          title={Object.keys(events)[0]}
          images={events.Eventos}
          goToBrand={goToEvent}
          titlePopUp={titlePopUpEvents}
        />
      )}
      {map(categories, (category) => (
        <ListCategory
          key={`category-${category.id}`}
          title={category.name}
          images={category.brands}
          goToBrand={goToBrand}
        />
      ))}
      {!eventsConfig[0]?.data && (
        <ListCategory
          title={Object.keys(events)[0]}
          images={events.Eventos}
          goToBrand={goToEvent}
        />
      )}
      <Filter
        active={filterOpen}
        onHideModal={toggleFilters}
        showSearcher={showSearcher}
        brands={brands}
        presentations={presentations}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
        selectedFiltersLength={selectedFiltersLength}
        handleFilterPresentations={handleFilterPresentations}
        resetAllSearchsAndFilters={resetAllSearchsAndFilters}
      />
    </PrivateContentLayout>
  );
};

export default Categories;
