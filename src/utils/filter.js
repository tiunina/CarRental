function createFilterStyles({ width, menuHeight }, isOpen) {
  return {
    control: provided => ({
      ...provided,
      width,
      height: '44px',
      borderRadius: '12px',
      cursor: 'pointer',
      marginTop: '8px',
      background: '#f7f7f7',
      padding: '0 16px',
      border: 'none',
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
      },
    }),
    placeholder: provided => ({
      ...provided,
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '1.25',
      color: '#101828',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: provided => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '16px',
      height: '16px',
      background: `url('/images/chevron-down.svg') no-repeat center`,
      backgroundSize: 'cover',
      color: 'transparent',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: 1.25,
      color: state.isSelected ? '#000' : '#8d929a',
      marginTop: '8px',
      cursor: 'pointer',
      padding: '0',
      '&:firstChild': {
        marginTop: '0',
      },
      '&:active': {
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '1.25',
        color: '#101828',
      },
    }),
    menu: provided => ({
      ...provided,
      width,
      height: menuHeight,
      background: '#fff',
      borderRadius: '12px',
      padding: '14px 8px 14px 18px',
      border: '1px solid #f7f7f7',
      boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
      margin: '4px 0 0',
    }),
    menuList: provided => ({
      ...provided,
      height: '100%',
      '::-webkit-scrollbar': {
        width: '8px',
        height: '100vh',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#dadde1',
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#BCC3CC',
      },
    }),
  };
}

// Reusable filter styles
export const firstFilterStyles = isOpen =>
  createFilterStyles({ width: '204px', menuHeight: '272px' }, isOpen);

export const secondFilterStyles = isOpen =>
  createFilterStyles({ width: '196px', menuHeight: '188px' }, isOpen);

// Dynamic rental price options
export function priceOptions(min = 30, max = 150, step = 10) {
  const options = [];
  for (let i = min; i <= max; i += step) {
    options.push({ value: String(i), label: String(i) });
  }
  return options;
}

// Transform brand array into select options
export function getBrandOptions(brands) {
  return brands?.map(brand => ({
    value: brand,
    label: brand,
  }));
}
