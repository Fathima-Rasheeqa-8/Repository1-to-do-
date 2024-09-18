
const Footer = ({items}) => {
  return (
    <h3 style={{color:'crimson' }}>{items.length} {items.length ===1 ? 'item left' : 'items left'}</h3>
  );
}
export default Footer
