const CLIENTS = [
  { id: "ey",                name: "Ernst & Young",    src: "/media/clients/ey.png" },
  { id: "manchester-united", name: "Manchester United", src: "/media/clients/manchester-united.png" },
  { id: "radisson-blu",      name: "Radisson Blu",     src: "/media/clients/radisson-blu.png" },
  { id: "scalespace",        name: "Scale Space",      src: "/media/clients/scalespace.png" },
];

export default function ClientLogos() {
  return (
    <div className="client-logos-grid">
      {CLIENTS.map((client) => (
        <div key={client.id} className="client-tile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={client.src}
            alt={client.name}
            className="client-tile-img"
          />
          <div className="client-tile-info">
            <span className="client-tile-name">{client.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
