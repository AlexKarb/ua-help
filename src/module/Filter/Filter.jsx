import { Formik } from 'formik';
import { CheckBox } from 'module/Utils/CheckBox/CheckBox';
import { Container, ContainerBox, FilterIcon, Wrapper } from './Filter.styled';
import { ChildrenType } from './ChildrenType';
import { useState } from 'react';

const Filter = ({ filter, toggleFilter }) => {
  const [showFilter, setShowFilter] = useState(false);

  const handleClick = e => toggleFilter(e.target.value);

  const removeChildItems = async () => {
    await toggleFilter('clothes_child', { deteleValue: true });
    await toggleFilter('children_food', { deteleValue: true });
    await toggleFilter('diapers', { deteleValue: true });
  };

  return (
    <>
      <FilterIcon
        isopen={showFilter ? 'open' : 'close'}
        onClick={() => setShowFilter(pS => !pS)}
      />
      {showFilter && (
        <Formik
          initialValues={{
            filter,
            showChild: false,
          }}
        >
          {({ values: { showChild, filter } }) => (
            <>
              <Container>
                <ContainerBox>
                  <Wrapper>
                    <CheckBox
                      value={'clothes_adult'}
                      label={'одяг'}
                      name="filter"
                      onClick={handleClick}
                    />
                  </Wrapper>
                  <Wrapper>
                    <CheckBox
                      value={'food'}
                      label={'їжа'}
                      name="filter"
                      onClick={handleClick}
                    />
                  </Wrapper>
                  <Wrapper>
                    <CheckBox
                      value={'hygiene'}
                      label={'гігієна'}
                      name="filter"
                      onClick={handleClick}
                    />
                  </Wrapper>
                </ContainerBox>

                <ContainerBox>
                  <Wrapper>
                    <CheckBox
                      label={'для дітей'}
                      name="showChild"
                      onClick={() => showChild && removeChildItems()}
                    />
                  </Wrapper>

                  <Wrapper>
                    <CheckBox
                      value={'delivery'}
                      label={'доставка'}
                      name="filter"
                      onClick={handleClick}
                    />
                  </Wrapper>
                  <Wrapper>
                    <CheckBox
                      value={'otherHelp'}
                      label={'інше'}
                      name="filter"
                      onClick={handleClick}
                    />
                  </Wrapper>
                </ContainerBox>
                {showChild && <ChildrenType handleClick={handleClick} />}
              </Container>
            </>
          )}
        </Formik>
      )}
    </>
  );
};

export default Filter;
