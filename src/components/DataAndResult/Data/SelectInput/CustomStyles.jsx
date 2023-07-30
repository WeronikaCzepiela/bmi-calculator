export const customStyles = {
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    defaultStyles,
    backgroundColor: state.isSelected ? '#101019' : '#101019',
    color: state.isSelected ? '#AAAABF' : '#AAAABF',
  }),

  indicatorSeparator: (defaultStyles, state) => ({
    ...defaultStyles,
    defaultStyles,
    backgroundColor: '#101019',
  }),

  placeholder: (defaultStyles, state) => ({
    ...defaultStyles,
    defaultStyles,
    color: '#AAAABF',
  }),

  menu: (defaultStyles, state) => ({
    ...defaultStyles,
    defaultStyles,
    backgroundColor: '#101019',
    borderWidth: 5,
    borderColor: '#353542',
    borderRadius: 6,
  }),

  selectedOptions: (defaultStyles, state) => ({
    ...defaultStyles,
    defaultStyles,
    color: '#418899',
  }),

  control: (defaultStyles, state) => ({
    ...defaultStyles,
    defaultStyles,
    backgroundColor: '#101019',
    borderColor: '#353542',
    borderRadius: 6,
    color: state.isSelected ? '#AAAABF' : '#AAAABF',
  }),
}
