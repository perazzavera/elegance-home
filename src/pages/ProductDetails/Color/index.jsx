import { Radio } from "@mui/material";

export default function Color({
  produtoSelecionado,
  corSelecionada,
  handleChangeCor,
}) {
  return (
    <div>
      <h3 className="font-dm text-xl text-gray-800">Color</h3>
      <div className="flex gap-4 mb-4">
        {produtoSelecionado.colors.map((item, index) => (
          <Radio
            value={item.name} // Passa o nome da cor como valor
            key={index}
            checked={corSelecionada === item.name} // Verifica se o nome da cor está selecionado
            onChange={() => handleChangeCor(item.name)} // Passa o nome da cor selecionada
            sx={{
              color: `${item.hex}`,
              "&.Mui-checked": {
                color: `${item.hex}`,
              },
              "& .MuiSvgIcon-root": {
                fontSize: 50,
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}
