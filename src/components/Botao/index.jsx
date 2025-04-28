export default function Botao({ children, type, position }) {
  return (
    <button
      className="bg-rose text-white py-3 px-6 text-lg font-medium hover:bg-coral transition-all duration-300"
      type={type}
      style={{ position: `${position}` }}
    >
      {children}
    </button>
  );
}
