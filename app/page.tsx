"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  MapPin,
  Phone,
  Menu,
  X,
  MessageCircle,
  ShieldCheck,
  Wrench,
  Package,
  Wind,
  Check,
  Plus,
  Search,
  ShoppingBag,
  HeartHandshake,
} from "lucide-react";
import { useState, useRef, useEffect, type FormEvent } from "react";
import {
  products,
  categories,
  company,
  whatsappUrl,
  type Product,
} from "./catalog";

const whatsapp = whatsappUrl;
const nav = [
  ["Equipamentos", "equipamentos"],
  ["Soluções", "solucoes"],
  ["Nossa casa", "sobre"],
  ["Contato", "contato"],
];
function Brand() {
  return (
    <a
      className="brand"
      href="#inicio"
      aria-label="Casa dos Compressores — início"
    >
      <span className="brand-mark" />
      <span>
        CASA DOS<strong>COMPRESSORES</strong>
        <small>A SOLUÇÃO QUE VOCÊ PRECISA</small>
      </span>
    </a>
  );
}
function ProductPicture({ product }: { product: Product }) {
  return product.image ? (
    <Image
      src={product.image}
      alt={product.name}
      width={480}
      height={400}
      sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 25vw"
      className="product-image"
    />
  ) : (
    <div
      role="img"
      aria-label={`${product.name} na Casa dos Compressores`}
      className="catalog-photo"
      style={{
        backgroundPosition: `${product.crop?.[0]}% ${product.crop?.[1]}%`,
      }}
    />
  );
}
export default function Home() {
  const [menu, setMenu] = useState(false);
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [detail, setDetail] = useState<Product | null>(null);
  const [prepared, setPrepared] = useState("");
  const quoteRef = useRef<HTMLDialogElement>(null);
  const detailRef = useRef<HTMLDialogElement>(null);
  const normalize = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const filtered = products.filter(
    (p) =>
      (category === "Todos" || p.category === category) &&
      normalize(`${p.name} ${p.brand} ${p.category} ${p.description}`).includes(
        normalize(query),
      ),
  );
  const visible =
    category === "Todos" && !query && !expanded
      ? filtered.slice(0, 4)
      : filtered;
  const toggleProduct = (id: string) =>
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  function openQuote() {
    setPrepared("");
    quoteRef.current?.showModal();
  }
  function showDetail(product: Product) {
    setDetail(product);
    detailRef.current?.showModal();
  }
  function sendQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const items = products
      .filter((p) => selected.includes(p.id))
      .map((p) => p.name)
      .join(", ");
    const message = `Olá! Meu nome é ${String(data.get("name")).trim()}. Vim pelo site e gostaria de um orçamento.\nInteresse: ${items || String(data.get("interest"))}.\n${String(data.get("message") || "").trim()}`;
    setPrepared(whatsapp(message));
  }
  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", closeMenu);
    return () => document.removeEventListener("keydown", closeMenu);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>
            <MapPin size={12} /> Feira de Santana, Bahia
          </span>
          <span>
            Potência para o seu trabalho. Parceria para o seu negócio.
          </span>
          <a href="tel:+557532218945">
            <Phone size={12} />
            (75) 3221-8945
          </a>
        </div>
      </div>
      <header>
        <div className="container navigation">
          <Brand />
          <nav aria-label="Menu principal" className={menu ? "is-open" : ""}>
            {nav.map(([label, id]) => (
              <a href={`#${id}`} key={id} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
          </nav>
          <button className="button button-yellow nav-cta" onClick={openQuote}>
            Solicitar orçamento <ArrowUpRight size={17} />
          </button>
          <button
            className="menu-toggle"
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <a href="#equipamentos" className="skip-link">
        Pular para o catálogo
      </a>
      <main id="inicio">
        <section className="hero">
          <div className="hero-grid" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                <span /> EQUIPAMENTOS PARA QUEM FAZ ACONTECER
              </p>
              <h1>
                Seu trabalho
                <br />
                não para.
                <br />
                <em>
                  A nossa força
                  <br />{" "}
                  também não.
                </em>
              </h1>
              <p className="hero-description">
                Do compressor à ferramenta certa. Tudo para dar mais potência ao
                seu negócio, com a parceria de quem entende.
              </p>
              <div className="hero-actions">
                <a className="button button-yellow" href="#equipamentos">
                  Explore os equipamentos <ArrowUpRight size={19} />
                </a>
                <a
                  className="text-link"
                  href={whatsapp()}
                  target="_blank"
                  rel="noreferrer"
                >
                  Fale com a gente <ArrowRight size={17} />
                </a>
              </div>
              <div className="hero-proof">
                <ShieldCheck size={19} />
                <span>Marcas de confiança</span>
                <i />
                <Wrench size={18} />
                <span>Atendimento especializado</span>
              </div>
            </div>
            <div className="hero-visual">
              <span className="big-type" aria-hidden="true">
                POTÊNCIA
              </span>
              <div className="hero-orbit" />
              <span className="visual-coordinate">01 / FORÇA QUE MOVE</span>
              <Image
                src="/images/compressor.png"
                alt="Compressor de ar Pressure Storm com reservatório azul e conjunto de motor industrial"
                width={1700}
                height={1450}
                sizes="(max-width: 540px) 100vw, 60vw"
                priority
                className="hero-machine"
              />
              <div className="product-callout">
                <span className="callout-dot" />
                <div>
                  <small>ROBUSTEZ EM CADA DETALHE</small>
                  <strong>Linha de compressores</strong>
                </div>
                <ArrowUpRight size={19} />
              </div>
              <span className="hero-vertical">
                PERFORMANCE. CONFIANÇA. CASA.
              </span>
            </div>
            <div className="hero-bottom">
              <span>DA SUA OFICINA À GRANDE INDÚSTRIA.</span>
              <a href="#equipamentos">
                Conheça a nossa força <ChevronDown size={16} />
              </a>
              <span>
                BA <span className="yellow">↗</span> BRASIL
              </span>
            </div>
          </div>
        </section>
        <div className="brand-strip">
          <div className="container">
            <span>
              GRANDES MARCAS.
              <br />
              <strong>UMA SÓ CASA.</strong>
            </span>
            <b className="pressure-logo">↗ Pressure</b>
            <b className="tekna-logo">Tekna</b>
            <b className="vonder-logo">
              vonder<span>®</span>
            </b>
            <b className="schulz-logo">SCHULZ</b>
            <b className="ferrari-logo">FERRARI</b>
            <b className="nova-logo">
              nove<span>54</span>
            </b>
          </div>
        </div>
        <section className="section container" id="equipamentos">
          <div className="section-heading">
            <div>
              <p className="eyebrow dark">O EQUIPAMENTO CERTO MUDA TUDO</p>
              <h2>
                Grandes soluções.
                <br />
                <span>Para cada desafio.</span>
              </h2>
            </div>
            <p>
              Uma casa completa para sua oficina, indústria,
              <br className="desktop" /> construção e campo. Encontre a sua
              próxima ferramenta.
            </p>
          </div>
          <div className="catalog-toolbar">
            <div className="category-tabs" aria-label="Filtrar equipamentos">
              {categories.map((item) => (
                <button
                  key={item}
                  className={category === item ? "active" : ""}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="search-box">
              <Search size={16} />
              <input
                aria-label="Buscar equipamento"
                placeholder="O que você procura?"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              {query && (
                <button aria-label="Limpar busca" onClick={() => setQuery("")}>
                  <X size={15} />
                </button>
              )}
            </div>
          </div>
          <div className="product-grid" aria-live="polite">
            {visible.map((product, index) => (
              <article className="product-card" key={product.id}>
                <div
                  className={`product-image-wrap ${product.crop ? "real-photo" : ""}`}
                >
                  <span className="product-tag">
                    {index === 0 && category === "Todos"
                      ? "EM DESTAQUE"
                      : product.category.toUpperCase()}
                  </span>
                  <button
                    className={`add-product ${selected.includes(product.id) ? "selected" : ""}`}
                    onClick={() => toggleProduct(product.id)}
                    aria-label={`${selected.includes(product.id) ? "Remover" : "Adicionar"} ${product.name} ${selected.includes(product.id) ? "do" : "ao"} orçamento`}
                    aria-pressed={selected.includes(product.id)}
                  >
                    {selected.includes(product.id) ? (
                      <Check size={17} />
                    ) : (
                      <Plus size={17} />
                    )}
                  </button>
                  <button
                    className="product-picture-button"
                    onClick={() => showDetail(product)}
                    aria-label={`Conhecer ${product.name}`}
                  >
                    <ProductPicture product={product} />
                  </button>
                </div>
                <div className="product-card-body">
                  <small>{product.brand}</small>
                  <h3>
                    <button onClick={() => showDetail(product)}>
                      {product.name}
                    </button>
                  </h3>
                  <p>
                    {product.tags[0]} <span>·</span> {product.tags[1]}
                  </p>
                  <button
                    className="product-card-link"
                    onClick={() => showDetail(product)}
                  >
                    Conhecer a linha <ArrowUpRight size={17} />
                  </button>
                </div>
              </article>
            ))}
          </div>
          {visible.length === 0 && (
            <div className="empty-state">
              <Search size={30} />
              <h3>Ainda não encontrou o que precisa?</h3>
              <p>
                Tente outro termo ou consulte nossa equipe. Temos muito mais na
                loja.
              </p>
              <button
                className="button button-dark"
                onClick={() => {
                  setQuery("");
                  setCategory("Todos");
                }}
              >
                Limpar filtros <ArrowRight size={16} />
              </button>
            </div>
          )}
          <div className="catalog-bottom">
            <span>
              <Package size={15} /> Modelos e disponibilidade sob consulta.
            </span>
            {category === "Todos" && !query && (
              <button
                className="button button-outline"
                onClick={() => {
                  setExpanded(!expanded);
                  if (expanded)
                    document
                      .getElementById("equipamentos")
                      ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {expanded ? "Mostrar destaques" : "Ver catálogo completo"}{" "}
                <span className="count">{products.length}</span>
                <ArrowRight size={16} />
              </button>
            )}
            <a
              href={whatsapp(
                "Olá! Estou procurando um equipamento e gostaria de ajuda.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              Não encontrou? Fale com a gente <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
        <section className="solutions-section" id="solucoes">
          <div className="container section" data-reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow">MAIS DO QUE EQUIPAMENTOS. PARCERIA.</p>
                <h2>
                  O seu próximo passo
                  <br />
                  começa <em>aqui.</em>
                </h2>
              </div>
              <p>
                Cada trabalho tem um desafio.
                <br />A gente ajuda você a encontrar a solução.
              </p>
            </div>
            <div className="solutions-grid">
              {[
                {
                  icon: Wind,
                  number: "01",
                  title: "Potência para a sua operação",
                  copy: "Compressores e equipamentos que acompanham o ritmo da sua oficina, indústria ou auto center.",
                  link: "Encontrar meu equipamento",
                  category: "Compressores",
                },
                {
                  icon: Wrench,
                  number: "02",
                  title: "A peça certa faz a diferença",
                  copy: "Peças, mangueiras, conexões e acessórios para cuidar do seu equipamento e seguir em frente.",
                  link: "Consultar peças e acessórios",
                  category: "Peças e acessórios",
                },
                {
                  icon: HeartHandshake,
                  number: "03",
                  title: "Gente que entende do seu trabalho",
                  copy: "Conte com atendimento próximo para escolher o produto de acordo com a sua necessidade.",
                  link: "Conversar com a equipe",
                  category: "",
                },
              ].map(({ icon: Icon, ...item }) => (
                <article className="solution-card" key={item.number}>
                  <div className="solution-top">
                    <Icon size={29} strokeWidth={1.4} />
                    <span>{item.number}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  {item.category ? (
                    <a
                      href="#equipamentos"
                      onClick={() => {
                        setCategory(item.category);
                        setQuery("");
                      }}
                    >
                      {item.link}
                      <ArrowUpRight size={17} />
                    </a>
                  ) : (
                    <a href={whatsapp()} target="_blank" rel="noreferrer">
                      {item.link}
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="about-section section container"
          id="sobre"
          data-reveal
        >
          <div className="about-collage">
            <div
              className="store-photo store-photo-main"
              role="img"
              aria-label="Prateleiras da Casa dos Compressores com ferramentas e produtos de estética automotiva"
            />
            <div
              className="store-photo store-photo-secondary"
              role="img"
              aria-label="Betoneiras disponíveis na loja"
            />
            <div className="about-stamp">
              <MapPin size={22} />
              <strong>
                É de Feira.
                <br />É da sua casa.
              </strong>
              <span>FEIRA DE SANTANA · BA</span>
            </div>
            <span className="photo-caption">
              MUITAS POSSIBILIDADES. UM SÓ LUGAR.
            </span>
          </div>
          <div className="about-copy">
            <p className="eyebrow dark">PRAZER, ESSA É A NOSSA CASA.</p>
            <h2>
              Quem trabalha com
              <br />
              força merece uma
              <br />
              <span>parceria à altura.</span>
            </h2>
            <p>
              Somos a Casa dos Compressores. Uma casa de portas abertas em Feira
              de Santana para quem constrói, conserta, transforma e faz
              acontecer.
            </p>
            <p>
              Reunimos equipamentos, ferramentas e acessórios para diferentes
              desafios. Do pequeno reparo ao próximo grande projeto, estamos
              aqui para ajudar na escolha certa.
            </p>
            <ul>
              <li>
                <Check size={17} /> Variedade para oficinas, construção e campo
              </li>
              <li>
                <Check size={17} /> Marcas que você já conhece e confia
              </li>
              <li>
                <Check size={17} /> Atendimento próximo, de pessoa para pessoa
              </li>
            </ul>
            <a
              className="button button-dark"
              href={company.maps}
              target="_blank"
              rel="noreferrer"
            >
              Venha conhecer a nossa casa <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section className="application-band">
          <div className="container">
            <span>A FORÇA DE QUEM FAZ</span>
            {[
              "Oficinas & auto centers",
              "Indústria",
              "Construção civil",
              "Campo & jardim",
            ].map((item) => (
              <span key={item}>
                <Plus size={15} />
                {item}
              </span>
            ))}
          </div>
        </section>
        <section className="section container faq-section" data-reveal>
          <div>
            <p className="eyebrow dark">PODE PERGUNTAR.</p>
            <h2>
              A gente ajuda
              <br />
              <span>você a escolher.</span>
            </h2>
            <p>
              Ficou com alguma dúvida?
              <br />
              Nossa equipe está a uma conversa de distância.
            </p>
            <a
              className="text-link dark-link"
              href={whatsapp()}
              target="_blank"
              rel="noreferrer"
            >
              Falar com um especialista <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="faq-list">
            {[
              {
                q: "Qual compressor é ideal para o meu trabalho?",
                a: "A escolha depende das ferramentas utilizadas, do consumo de ar e da frequência de uso. Conte para a nossa equipe como é a sua operação para consultar as opções adequadas.",
              },
              {
                q: "Vocês vendem só compressores?",
                a: "Nossa linha também inclui geradores, motobombas, ferramentas, aspiradores, equipamentos para construção, campo e jardim, além de peças e acessórios. Explore as categorias ou consulte nossa equipe.",
              },
              {
                q: "Como faço para solicitar um orçamento?",
                a: "Você pode adicionar equipamentos à sua lista pelo botão + no catálogo e clicar em “Pedir orçamento”. Informe seu nome e sua necessidade para preparar uma mensagem e continuar o atendimento pelo WhatsApp.",
              },
              {
                q: "Como consultar uma peça para o meu equipamento?",
                a: "Tenha em mãos a marca e o modelo. Uma foto da peça e da identificação do equipamento também ajuda. Envie as informações pelo WhatsApp para consultar compatibilidade e disponibilidade.",
              },
              {
                q: "Onde fica a Casa dos Compressores?",
                a: "Você encontra nossa loja na Avenida Presidente Dutra, 1495, em Feira de Santana, Bahia. Use o botão “Como chegar” na seção de contato para abrir a localização no mapa.",
              },
            ].map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <Plus size={18} />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="contact-section" id="contato">
          <div className="container contact-inner">
            <div className="contact-copy">
              <p className="eyebrow dark">
                VAMOS COLOCAR SEU PRÓXIMO PROJETO EM MOVIMENTO?
              </p>
              <h2>
                Você traz o desafio.
                <br />A gente entra
                <br />
                com a <span>força.</span>
                <ArrowUpRight className="contact-arrow" />
              </h2>
              <p>
                Equipamento certo. Atendimento de verdade.
                <br />
                Fale com a Casa dos Compressores.
              </p>
              <button className="button button-dark" onClick={openQuote}>
                Vamos conversar <MessageCircle size={19} />
              </button>
            </div>
            <div className="contact-card">
              <div className="contact-card-heading">
                <span className="mini-dot" /> NOSSA CASA É SUA CASA.
              </div>
              <div className="contact-item">
                <MapPin size={21} />
                <div>
                  <small>FAÇA UMA VISITA</small>
                  <strong>{company.address}</strong>
                  <p>{company.city}</p>
                  <a href={company.maps} target="_blank" rel="noreferrer">
                    Como chegar <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <div>
                  <small>LIGUE PARA A GENTE</small>
                  <a className="contact-phone" href="tel:+557532218945">
                    {company.phone}
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <MessageCircle size={21} />
                <div>
                  <small>PREFERE UMA MENSAGEM?</small>
                  <a
                    className="contact-phone"
                    href={whatsapp()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Conversar no WhatsApp <ArrowUpRight size={16} />
                  </a>
                  <p>Conte o que você precisa. Vamos ajudar.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-main">
          <div>
            <Brand />
            <p>
              A solução que você precisa.
              <br />A parceria que o seu trabalho merece.
            </p>
          </div>
          <div className="footer-links">
            <small>EXPLORE A CASA</small>
            {nav.map(([name, id]) => (
              <a href={`#${id}`} key={id}>
                {name}
              </a>
            ))}
          </div>
          <div className="footer-links">
            <small>ENCONTRE SUA SOLUÇÃO</small>
            {[
              "Compressores",
              "Geradores",
              "Ferramentas",
              "Peças e acessórios",
            ].map((item) => (
              <a
                href="#equipamentos"
                key={item}
                onClick={() => {
                  setCategory(item);
                  setQuery("");
                }}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="footer-location">
            <small>FEIRA DE SANTANA · BAHIA</small>
            <p>
              Av. Presidente Dutra, 1495
              <br />
              Feira de Santana · BA
            </p>
            <a href="tel:+557532218945">
              (75) 3221-8945 <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Casa dos Compressores.</span>
          <span>
            Feito para quem faz acontecer. <span className="yellow">↗</span>
          </span>
          <span>Proposta de site · versão de apresentação</span>
        </div>
      </footer>
      {selected.length > 0 && (
        <div className="quote-tray" role="status">
          <span>
            <ShoppingBag size={19} />
            <strong>{selected.length}</strong>{" "}
            {selected.length === 1
              ? "equipamento selecionado"
              : "equipamentos selecionados"}
          </span>
          <button onClick={openQuote}>
            Pedir orçamento <ArrowUpRight size={17} />
          </button>
          <button
            className="clear-selection"
            onClick={() => setSelected([])}
            aria-label="Limpar equipamentos selecionados"
          >
            <X size={16} />
          </button>
        </div>
      )}
      <a
        className={`floating-whatsapp ${selected.length ? "has-tray" : ""}`}
        href={whatsapp()}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar com a Casa dos Compressores pelo WhatsApp"
      >
        <MessageCircle size={24} />
        <span>Vamos conversar?</span>
      </a>
      <dialog
        ref={detailRef}
        className="detail-dialog"
        aria-labelledby="detail-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) detailRef.current?.close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Fechar detalhes"
          onClick={() => detailRef.current?.close()}
        >
          <X size={22} />
        </button>
        {detail && (
          <div className="detail-layout">
            <div
              className={`detail-picture ${detail.crop ? "real-photo" : ""}`}
            >
              <ProductPicture product={detail} />
            </div>
            <div className="detail-copy">
              <p className="eyebrow dark">{detail.brand}</p>
              <h2 id="detail-title">{detail.name}</h2>
              <p>{detail.description}</p>
              <div className="detail-tags">
                {detail.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <small>
                Imagens ilustrativas da linha. Consulte modelos, especificações
                e disponibilidade com nossa equipe.
              </small>
              <button
                className="button button-yellow"
                onClick={() => {
                  setSelected((current) =>
                    current.includes(detail.id)
                      ? current
                      : [...current, detail.id],
                  );
                  detailRef.current?.close();
                  openQuote();
                }}
              >
                Quero um orçamento <ArrowUpRight size={18} />
              </button>
              <button
                className="detail-secondary"
                onClick={() => {
                  if (!selected.includes(detail.id)) toggleProduct(detail.id);
                  detailRef.current?.close();
                }}
              >
                Adicionar à lista e continuar explorando <Plus size={15} />
              </button>
            </div>
          </div>
        )}
      </dialog>
      <dialog
        ref={quoteRef}
        className="quote-dialog"
        aria-labelledby="quote-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) quoteRef.current?.close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Fechar orçamento"
          onClick={() => quoteRef.current?.close()}
        >
          <X size={22} />
        </button>
        <p className="eyebrow dark">VAMOS ENCONTRAR A SUA SOLUÇÃO.</p>
        <h2 id="quote-title">
          Seu próximo projeto
          <br />
          começa com uma conversa.
        </h2>
        {prepared ? (
          <div className="quote-ready">
            <span className="ready-icon">
              <Check size={26} />
            </span>
            <h3>Mensagem pronta!</h3>
            <p>
              Continue no WhatsApp para enviar seu pedido à equipe e consultar
              as opções para o seu projeto.
            </p>
            <a
              className="button button-yellow"
              href={prepared}
              target="_blank"
              rel="noreferrer"
            >
              Abrir WhatsApp <ArrowUpRight size={18} />
            </a>
            <button
              className="detail-secondary"
              onClick={() => setPrepared("")}
            >
              Editar pedido
            </button>
            <small>
              O pedido será enviado somente quando você confirmar no WhatsApp.
            </small>
          </div>
        ) : (
          <form onSubmit={sendQuote}>
            <p className="form-intro">
              Conte o que precisa e prepare seu pedido pelo WhatsApp.
            </p>
            {selected.length > 0 && (
              <div className="selected-items">
                {products
                  .filter((p) => selected.includes(p.id))
                  .map((p) => (
                    <span key={p.id}>
                      {p.name}
                      <button
                        type="button"
                        aria-label={`Remover ${p.name}`}
                        onClick={() => toggleProduct(p.id)}
                      >
                        <X size={13} />
                      </button>
                    </span>
                  ))}
              </div>
            )}
            <label htmlFor="quote-name">
              Como podemos chamar você?
              <input
                id="quote-name"
                name="name"
                placeholder="Seu nome"
                required
                minLength={2}
                maxLength={80}
                autoComplete="given-name"
                pattern=".*\S.*"
              />
            </label>
            {selected.length === 0 && (
              <label htmlFor="quote-interest">
                O que você está procurando?
                <select
                  id="quote-interest"
                  name="interest"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Selecione uma categoria
                  </option>
                  {categories
                    .filter((c) => c !== "Todos")
                    .map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  <option>Preciso de ajuda para escolher</option>
                </select>
              </label>
            )}
            <label htmlFor="quote-message">
              Conte um pouco sobre o seu projeto <span>(opcional)</span>
              <textarea
                id="quote-message"
                name="message"
                placeholder="Aplicação, modelo, quantidade ou o que você precisa resolver..."
                rows={3}
                maxLength={1500}
              />
            </label>
            <button className="button button-yellow" type="submit">
              Preparar meu pedido <ArrowRight size={18} />
            </button>
            <small className="form-privacy">
              Seus dados serão incluídos apenas na mensagem que você decidir
              enviar pelo WhatsApp.
            </small>
          </form>
        )}
      </dialog>
    </>
  );
}
