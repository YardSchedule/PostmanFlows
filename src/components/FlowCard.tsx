export const FlowCard = ({ title, onClick, selected }) => {
  return (
    <div
      className="flex row flow-card"
      onClick={onClick}
      data-selected={selected}
    >
      <span>{title}</span>
    </div>
  );
};
