import "./Style.scss";
import TextDescription from "../../../components/TextDescription";
import Button from "../../../components/Button/index";
import imageArrow from "../../../assets/images/arrowPurple.svg";
import purpleHeart from "../../../assets/images/purpleHeart.svg";
import HeaderAdoption from "../../../components/HeaderAdoption";
import dogImage from '../../../assets/images/Melzinha.png'
import Feed from '../../../pages/feed'
export default function PetDetail() {

  return (
    <>
      <HeaderAdoption
        imageOne={imageArrow}
        titleName="Melzinha"
        imageTwo={purpleHeart}
        identification="headerWhite"
      />

      <main>
        <img src={dogImage} alt="cachorro imagem" />

        <div className="dogData">
          <div className="dogCerto">
            <TextDescription title="Nome" description="Melzinha" />
          </div>

          <div className="dogCerto">
            <TextDescription title="Idade" description="1 - 3 meses" />
          </div>

          <div className="dogCerto">
            <TextDescription title="Porte" description="Médio" />
          </div>

          <div className="dogCerto">
            <TextDescription title="Gênero" description="Fêmea" />
          </div>

          <div className="dogCerto">
            <TextDescription
              title="Vacinação"
              description="Todas as vacinas necessárias"
            />
          </div>

          <div className="dogCerto">
            <TextDescription
              title="Localização"
              description="Rio de Janeiro - RJ"
            />
          </div>

          <div className="localizacao">
            <span>
         {/* Adicionando o feed na anchor pra não dar erro no deploy, mas depois será mudado */}
              <a href={Feed}>Ver mais...</a>
            </span>
          </div>

          <div className="dogCerto">
            <TextDescription title="Doador" description="Henrique Soares" />
          </div>
        </div>

        <section className="description">
          <h3>Descrição</h3>
          {/* {// Depois vai ser passada como props, mas atualmente será feito só a tela.}
          <p className="paragraph">{description}</p> */}
          <p className="paragraph">A Melzinha foi encontrada próximo à minha casa, porém não tenho condinções de cuidar dela, já tenho animais em casa. Ela é muito dócil e se adapta muito rápido ao ambiente.. Lorem ipsum Lorem ipsum Lorem Ipsum.</p>
        </section>

        <div id="position">
          <Button identifier="gradient" name="Quero adotar"></Button>
        </div>
      </main>
    </>
  );
}
