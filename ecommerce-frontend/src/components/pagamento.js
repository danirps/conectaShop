import React, { useState, useEffect } from "react";

const Pagamento = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    handleResize(); // Verifica no carregamento
    window.addEventListener("resize", handleResize); // Atualiza no redimensionamento
    return () => window.removeEventListener("resize", handleResize); // Limpa o listener
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "20px",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      marginBottom: isMobile ? "70px" : "0px",
    },
    formSection: {
      flex: "1 1 300px",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    paymentSection: {
      flex: "1 1 300px",
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "18px",
      marginBottom: "20px",
      color: "#333",
    },
    inputField: {
        width: "100%", 
        padding: "10px",  
        marginBottom: "15px", 
        border: "1px solid #ccc", 
        borderRadius: "4px",  
        fontSize: "14px",
        boxSizing: "border-box",  // Isso garante que a largura leve em consideração o padding
      }
      ,
    inputGroup: {
      display: "flex",
      justifyContent: "space-between", 
      gap: "10px",
    },
    cardIcons: {
      display: "flex",
      flexWrap: "nowrap",  // Não permite quebra de linha
      justifyContent: "center",
      overflowX: "auto",  // Permite rolagem horizontal, se necessário
      gap: "10px",  // Garante espaço uniforme entre os itens
      marginBottom: "20px",
      padding: "5px",
    },
    cardIcon: {
      width: "50px",
      height: "30px",
      objectFit: "contain",
      border: "1px solid #ddd",
      borderRadius: "4px",
      backgroundColor: "#f8f8f8",
      padding: "2px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    paymentButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
    },
    secureInfo: {
      marginTop: "20px",
      fontSize: "12px",
      color: "#555",
    },
    radioGroup: {
      display: "flex",
      justifyContent: "center",  // Centraliza os rádios
      gap: "15px",  // Espaçamento entre os itens
      marginBottom: "15px",  // Espaçamento abaixo dos rádios
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formSection}>
        <h2 style={styles.title}>1 - Dados cadastrais</h2>
        <form>
          <div style={styles.radioGroup}>
            <label>
              <input type="radio" name="tipo-pessoa" value="brasileiro" defaultChecked /> Brasileiro
            </label>
            <label>
              <input type="radio" name="tipo-pessoa" value="estrangeiro" /> Estrangeiro
            </label>
          </div>
          <input type="text" placeholder="Digite seu nome completo" style={styles.inputField} />
          <input type="email" placeholder="Digite seu melhor e-mail" style={styles.inputField} />
          <div style={styles.inputGroup}>
            <input type="text" placeholder="Celular com DDD" style={styles.inputField} />
            <input type="text" placeholder="CPF/CNPJ" style={styles.inputField} />
          </div>
        </form>
      </div>

      <div style={styles.paymentSection}>
        <h2 style={styles.title}>2 - Selecionar Pagamento</h2>
        <form>
          <div style={styles.cardIcons}>
            <img
              src="../assets/images/visa.png"
              alt="Visa"
              style={styles.cardIcon}
              onError={(e) => (e.target.src = "https://img.icons8.com/?size=512&id=13608&format=png")}
            />
            <img
              src="../assets/images/mastercard.png"
              alt="MasterCard"
              style={styles.cardIcon}
              onError={(e) => (e.target.src = "https://www.idinheiro.com.br/wp-content/uploads/2023/08/Como-fazer-cartao-de-credito-Mastercard.jpg")}
            />
            <img
              src="../assets/images/amex.png"
              alt="American Express"
              style={styles.cardIcon}
              onError={(e) => (e.target.src = "https://w7.pngwing.com/pngs/868/55/png-transparent-logo-american-express-cards-bank-insurance-bank-blue-text-rectangle-thumbnail.png")}
            />
            <img
              src="../assets/images/elo.png"
              alt="Elo"
              style={styles.cardIcon}
              onError={(e) => (e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48tJyq413y4MjP4p9twcGMl3A3sx64rLOIw&s")}
            />
            <img
              src="../assets/images/diners.png"
              alt="Diners Club"
              style={styles.cardIcon}
              onError={(e) => (e.target.src = "https://w7.pngwing.com/pngs/277/486/png-transparent-diners-club-international-hd-logo-thumbnail.png")}
            />
            <img
              src="../assets/images/boleto.png"
              alt="Boleto"
              style={styles.cardIcon}
              onError={(e) => (e.target.src = "https://w7.pngwing.com/pngs/750/612/png-transparent-boleto-3d-payment-system-icon-thumbnail.png")}
            />
          </div>
          <input type="text" placeholder="Número do cartão" style={styles.inputField} />
          <input type="text" placeholder="Seu Nome impresso no cartão" style={styles.inputField} />
          <div style={styles.inputGroup}>
            <input type="text" placeholder="Validade (MM/AAAA)" style={styles.inputField} />
            <input type="text" placeholder="Código de segurança (CW)" style={styles.inputField} />
          </div>
          <select style={styles.inputField}>
            <option>1x de R$ 97,00</option>
            <option>2x de R$ 48,50</option>
            <option>3x de R$ 32,33</option>
          </select>
          <button type="submit" style={styles.paymentButton}>Comprar Agora</button>
        </form>
        <div style={styles.secureInfo}>
          <p>Você está em um ambiente seguro</p>
          <p>
            <small>
              Este é um produto digital, você receberá os dados para acessá-lo via internet.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagamento;
