const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: { mobile: '496px', tablet: '542px' },
    width: { mobile: '280px',  tablet: '458px'},
    maxWidtht: {  tablet: '822px'},
    boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    borderRadius: { mobile: '40px', tablet: '40px' },
    mt: { mobile: '20px', tablet: '60px', desktop: '40px' },
    ml: 'auto',
    mr: 'auto',
    padding: { mobile: '20px 8px 16px', tablet: '20px 32px' },
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    mb: '24px',
    textAlign: 'center',
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: { mobile: '20px', tablet: '28px' },
    lineHeight: { mobile: '27.32px', tablet: '38.25px' },
    color: 'primary',
  },
  ul: {
    display: ' flex',
    p: '0',
    marginBottom: '24px',
  },
};

export default styles;
