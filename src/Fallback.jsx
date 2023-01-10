function Fallback({ error }) {
  return (
    <div className="fallback">
      <p>Omoh!!! Something went wrong o</p>
      <p style={{ color: "red" }}>{error.message}</p>
    </div>
  );
}

export default Fallback;
