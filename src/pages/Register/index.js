import {
  ContainerGeral,
  FormContainer,
  ContainerUser,
  ContainerContacts,
  ContainerAddress,
  ContainerWeight,
  ContainerDice,
  TextAcademy,
  ContainerAcademy,
  User,
  SelectAcademy,
  ContainerButtons,
  ButtonSave,
  ButtonCancel,
  ContainerInfo,
  Cep,
  Numero,
  ContainerPassword,
  Bairro,
  Neighborhood,
  Citys,
  Menu,
} from "./styles";

import Input from "../../components/Input";
import Footer from "../../components/Footer";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Select from "../../components/Select";
import { api } from "../../services/api";
import { buscarViaCep } from "../../services/viaCep";
import { maskCep, maskCel, maskCpf } from "../../utils/masks";
import { Link, useHistory } from "react-router-dom";
import MenuLateral from "../../components/MenuLateral";

import Imglogo from "../../assets/menu.png";
import Tag from "../../components/Tag";

function Register() {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const [userStudent, setUserStudent] = useState({
    first_name: "",
    surname: "",
    email: "",
    password: "",
    birth_date: "",
    celular: "",
    weight: "",
    numero: "",
    height: "",
    state: "",
    city: "",
    street: "",
    cep: "",
    gender: "",
    contact_type: "",
    confirmePassword: "",
    cpf: "",
    academyCategory: "",
  });

  const [categories, setCategories] = useState([]);

  const [categoriesSel, setCategoriesSel] = useState([]);

  const categoriesRef = useRef();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await api.get("/academy");

        setCategories(response.data);
      } catch (error) {
        alert(error);
      }
    };

    loadCategories();
  }, []);

  const handleCategories = (e) => {
    const idSel = e.target.value;

    const categorySel = categories.find((c) => c.id.toString() === idSel);

    if (categorySel && !categoriesSel.includes(categorySel))
      setCategoriesSel([...categoriesSel, categorySel]);

    e.target[e.target.selectedIndex].disabled = true;
    e.target.value = "";
  };

  const handleUnselCategory = (idUnsel) => {
    setCategoriesSel(categoriesSel.filter((c) => c.id !== idUnsel));

    const { options } = categoriesRef.current;

    for (var i = 0; i < options.length; i++) {
      if (options[i].value === idUnsel.toString()) options[i].disabled = false;
    }
  };

  const confirmePassword = () =>
    userStudent.password === userStudent.confirmePassword;

  const buttonDisabled = () => {
    const {
      first_name,
      surname,
      email,
      password,
      birth_date,
      celular,
      weight,
      numero,
      height,
      cep,
      cpf,
      gender,
      contact_type,
    } = userStudent;

    if (
      !first_name ||
      !surname ||
      !email ||
      !password ||
      !birth_date ||
      !celular ||
      !weight ||
      !numero ||
      !height ||
      !cep ||
      !cpf ||
      !gender ||
      !contact_type ||
      !confirmePassword()
    )
      return true;

    return false;
  };

  const handleInput = (e) => {
    setUserStudent({ ...userStudent, [e.target.id]: e.target.value });
  };

  const handleCpf = (e) => {
    let cpf = maskCpf(e.target.value);

    setUserStudent({ ...userStudent, [e.target.id]: e.target.value, cpf });
  };

  const handleCel = (e) => {
    let celular = maskCel(e.target.value);

    setUserStudent({ ...userStudent, [e.target.id]: e.target.value, celular });
  };

  const handleCep = async (e) => {
    let cep = maskCep(e.target.value);

    if (cep.length === 9) {
      const response = await buscarViaCep(cep);

      setUserStudent({
        ...userStudent,
        [e.target.id]: cep,
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        localidade: response.data.localidade,
        uf: response.data.uf,
      });
    } else {
      setUserStudent({ ...userStudent, [e.target.id]: cep });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    const categories = categoriesSel.reduce((s, c) => (s += c.id + ","), "");

    data.append("academy", categories.substr(0, categories.length - 1));

    if (!confirmePassword()) return alert("As senhas precisam ser iguais!");

    try {
      const response = await api.post("/userAcademy", {
        first_name: userStudent.first_name,
        surname: userStudent.surname,
        email: userStudent.email,
        password: userStudent.password,
        birth_date: userStudent.birth_date,
        gender: userStudent.gender,
        celular: userStudent.celular,
        weight: userStudent.weight,
        number: userStudent.numero,
        height: userStudent.height,
        state: userStudent.uf,
        city: userStudent.localidade,
        street: userStudent.logradouro,
        cep: userStudent.cep,
        contact_type: userStudent.contact_type,
        cpf: userStudent.cpf,
        academyCategory: categoriesSel.map((c) => c.id),
      });

      history.push("/clientes");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <Header />
      <ContainerGeral>
        {showMenu && <MenuLateral />}
        <Menu onClick={() => setShowMenu(true)}>
          {!showMenu && (
            <img
              src={Imglogo}
              onClick={() => (showMenu ? setShowMenu(true) : "")}
            />
          )}
        </Menu>
        <FormContainer onClick={() => (showMenu ? setShowMenu(false) : "")}>
          <ContainerUser>
            <h1>Dados Pessoais</h1>
            <User>
              <Input
                id="first_name"
                label="Primeiro Nome"
                type="text"
                value={userStudent.first_name}
                handler={handleInput}
              />
              <Input
                id="surname"
                label="Sobrenome"
                type="text"
                value={userStudent.surname}
                handler={handleInput}
              />

              <Select id="gender" label="Sexo" type="int" handler={handleInput}>
                <option value="">Selecione</option>
                <option value="F">Feminino</option>
                <option value="M">Masculino</option>
                <option value="O">Outros</option>
              </Select>
              <Input
                id="birth_date"
                label="Data de Nascimento"
                type="date"
                value={userStudent.birth_date}
                handler={handleInput}
              />
              <Input
                id="cpf"
                label="CPF"
                type="text"
                maxLength="14"
                value={userStudent.cpf}
                handler={handleCpf}
              />
              <Input
                id="email"
                label="E-mail"
                type="email"
                value={userStudent.email}
                handler={handleInput}
              />
            </User>
          </ContainerUser>
          <ContainerInfo>
            <ContainerDice>
              <ContainerContacts>
                <h1>Contato</h1>
                <Input
                  id="celular"
                  label="Celular"
                  type="text"
                  placeholder="(11)99999-9999"
                  maxLength="15"
                  value={userStudent.celular}
                  handler={handleCel}
                />
                <Select
                  id="contact_type"
                  label="Tipo"
                  type="text"
                  handler={handleInput}
                >
                  <option value="">Selecione</option>
                  <option value="Ce">Celular</option>
                  <option value="R">Residencial</option>
                  <option value="C">Comercial</option>
                </Select>
              </ContainerContacts>
              <ContainerWeight>
                <Input
                  id="weight"
                  label="Peso"
                  placeholder="000"
                  type="double"
                  maxLength="3"
                  value={userStudent.weight}
                  handler={handleInput}
                />
                <Input
                  id="height"
                  label="Altura"
                  type="double"
                  placeholder="0.00"
                  maxLength="4"
                  value={userStudent.height}
                  handler={handleInput}
                />
              </ContainerWeight>
            </ContainerDice>
            <ContainerAddress>
              <h1>Endereço</h1>
              <Cep>
                <Input
                  id="cep"
                  label="CEP"
                  type="text"
                  maxLength="9"
                  value={userStudent.cep}
                  handler={handleCep}
                  required
                />
              </Cep>
              <Input
                id="logradouro"
                label="Logradouro"
                type="text"
                value={userStudent.logradouro}
              />
              <Neighborhood>
                <Bairro>
                  <Input
                    id="street"
                    label="Bairro"
                    type="text"
                    value={userStudent.bairro}
                  />
                </Bairro>
                <Numero>
                  <Input
                    id="numero"
                    label="Numero"
                    type="number"
                    value={userStudent.numero}
                    handler={handleInput}
                    required
                  />
                </Numero>
              </Neighborhood>
              <Citys>
                <Input
                  id="cidade"
                  label="Cidade"
                  type="int"
                  value={userStudent.localidade}
                />
                <Input
                  id="estado"
                  label="Estado"
                  type="int"
                  value={userStudent.uf}
                />
              </Citys>
            </ContainerAddress>
          </ContainerInfo>
          <ContainerAcademy>
            <TextAcademy>
              <p>Selecione a academia onde o usuário será vinculado</p>
            </TextAcademy>
            <SelectAcademy>
              <Select
                id="academia"
                type="int"
                handler={handleCategories}
                ref={categoriesRef}
              >
                <option value="">Selecione</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </Select>
              <div>
                {categoriesSel.map((c) => (
                  <Tag
                    key={c.id}
                    info={c.name}
                    handleClose={() => handleUnselCategory(c.id)}
                  ></Tag>
                ))}
              </div>
            </SelectAcademy>
          </ContainerAcademy>
          <ContainerPassword>
            <Input
              id="password"
              label="Senha"
              type="password"
              value={userStudent.password}
              handler={handleInput}
            />
            <Input
              id="confirmePassword"
              label="Confirme sua Senha"
              type="password"
              onBlur={(e) => {
                if (!confirmePassword()) alert("As senhas precisam ser iguais");
                e.target.focus();
              }}
              value={userStudent.confirmePassword}
              handler={handleInput}
            />
          </ContainerPassword>
          <ContainerButtons onSubmit={handleSubmit}>
            <ButtonSave disabled={buttonDisabled()}>Salvar</ButtonSave>
            <ButtonCancel>
            <Link to="/home">
              Cancelar
            </Link>
            </ButtonCancel>
          </ContainerButtons>
          <h4>*Todos os campos são obrigatórios</h4>
        </FormContainer>
      </ContainerGeral>
      <Footer />
    </>
  );
}

export default Register;
