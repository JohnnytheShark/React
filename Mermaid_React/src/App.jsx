import './App.css'
import Mermaid from './components/Mermaid';

function App() {
  const chartDefinition = `
  ---
  title: Entity Relationship Diagram Example E-commerce
  ---
  erDiagram
  CUSTOMER }|--o{ ORDERS : places
    CUSTOMER{
      int id PK
      varchar name
      varchar email
      date creation_date
    }

    ORDERS{
      int id PK
      date order_date
      varchar status
    }
    ORDERS ||--|{ PRODUCTS : have
    PRODUCTS{
      int id PK
      varchar product
      varchar product_description
      int amount
      int inventory
      date updatedDate
    }
    CUSTOMER }|--o{ SHIPPINGADDRESS : have
    SHIPPINGADDRESS{
      int id PK
      int user_id FK
      varchar address_line1
      varchar address_line2
      varchar city
      int postal_code
      varchar country
      varchar phone
    }


`;
  return (
    <main>
      <Mermaid chart={chartDefinition} id="Diagram Example"/>
      <p>Want to use Mermaid.js with your React projects? Check out how I did it here:</p>
      <a href="https://github.com/JohnnytheShark/React/tree/main/Mermaid_React">Github Repository</a>
    </main>
  )
}

export default App
