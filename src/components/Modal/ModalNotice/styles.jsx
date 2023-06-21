const styles = {
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'max-content',
    width: { mobile: '280px', tablet: '681px' },
    p: { mobile: '12px 12px 16px 12px', tablet: '32px 31px 24px 32px' },
  },
  media: {
    m: { mobile: '32px 8px 8px 8px', tablet: '0px' },
    height: { mobile: '240px', tablet: '298px' },
    width: { mobile: '240px', tablet: '262px' },
    borderRadius: '0px 0px 40px 40px',
  },
  content: {
    display: { mobile: 'block', tablet: 'flex' },
    gap: '24px',
    mb: { mobile: '12px', tablet: '28px' },
    position: 'relative',
  },
  contentText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  title: {
    fontWeight: '700',
    fontSize: { mobile: '24px', tablet: '28px' },
    lineHeight: { mobile: '33px', tablet: '38px' },
    fontFamily: 'typography.fontFamily',
  },
  category: {
    position: 'absolute',
    top: 16,
    left: { mobile: 8, tablet: 0 },
    bgcolor: 'primary.secondary',
    color: 'primary',
    p: 1,
    height: 32,
    width: 126,
    borderRadius: '0px  16px 16px 0px',
    fontSize: '14px',
    fontWeight: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: { mobile: '8px', tablet: '10px' },
    m: 0,
    p: 0,
  },
  listItem: {
    display: 'flex',
    gap: '51px',
    fontWeight: 600,
    fontSize: { mobile: '14px', tablet: '16px' },
    lineHeight: { mobile: '19px', tablet: '22px' },
    m: 0,
    p: 0,
  },
  listItemText: {
    fontWeight: 500,
    fontSize: { mobile: '14px', tablet: '16px' },
    lineHeight: { mobile: '19px', tablet: '22px' },
    m: 0,
    p: 0,
  },
   linkT: {
    fontSize: { mobile: '14px', tablet: '16px' },
    lineHeight: { mobile: '19px', tablet: '22px' },
    color: '#FFC107',
        '&:hover': {
      color: '#54ADFF',
    },
    '&:focus': {
      color: '#54ADFF',
    },
  },
  comment: {
    fontWeight: 600,
    fontSize: { mobile: '14px', tablet: '16px' },
    lineHeight: { mobile: '19px', tablet: '24px' },
    m: 0,
    p: 0,
  },
  commentText: {
    fontWeight: 500,
    fontSize: { mobile: '14px', tablet: '16px' },
    lineHeight: { mobile: '19px', tablet: '24px' },

  },
  button: {
    textTransform: 'none',
    minWidth: { mobile: '256px', tablet: '129px' },
    height: '40px',
    border: '2px solid #54ADFF',
    borderRadius: '40px',
    fontSize: 16,
    padding: '9px 20px',
    lineHeight: 1.37,
    color: '#54ADFF',
    '& svg': {
      width: '24px',
      height: '24px',
      stroke: '#54ADFF',
    },
    '&:hover svg': {
      stroke: '#FEF9F9',
    },
    '&:hover': {
      backgroundColor: '#54ADFF',
      color: '#FEF9F9',
    },

    '&:active': {
      backgroundColor: '#54ADFF',
      color: '#FEF9F9',
    },
    '&:active svg': {
      stroke: '#FEF9F9',
    },
    '&:focus': {
      backgroundColor: '#54ADFF',
      color: '#FEF9F9',
    },
    '&:focus svg': {
      stroke: '#FEF9F9',
    },
  },
  buttonAdd: {
    textTransform: 'none',
    minWidth: { mobile: '256px', tablet: '129px' },
    // minWidth: '129px',
    height: '40px',
    border: '2px solid #54ADFF',
    borderRadius: '40px',
    fontSize: 16,
    padding: '9px 20px',
    lineHeight: 1.37,
    color: '#FEF9F9',
     backgroundColor: '#54ADFF',
    '& svg': {
      width: '24px',
      height: '24px',
      stroke: '#FEF9F9',
    },
    '&:hover': {
      backgroundColor: '#54ADFF',
      color: '#FEF9F9',
    },
  },
};

export default styles;

