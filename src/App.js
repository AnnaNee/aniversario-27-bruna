import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const NextButtonGame = ({ showButton, path, text }) => {
  if (showButton) {
    return <Link className="next-button" to={path}>{text}</Link>;
  }

  return null;
}

const HomeRoute = () => {
  const [toggleNextButton, setToggleNextButton] = useState(false);
  const [showTypeEffect, setShowTypeEffect] = useState(false);
  const showNextButton = () => {
    setShowTypeEffect(false);
    setToggleNextButton(true);
  }

  useEffect(() => {
    var app = document.getElementById('typeWritingStart');
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 10
    }, []);

    if (!showTypeEffect) {
      typewriter.typeString('oi, meu amor! (:')
        .pauseFor(1500)
        .deleteAll()
        .typeString('eu sei que você gosta de resolver os puzzles dos jogos do Switch/PS4...')
        .pauseFor(1500)
        .deleteAll()
        .typeString('então preparei alguns pra você resolver!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('você vai precisar resolver 9 puzzles pra conseguir receber o seu presente.')
        .pauseFor(1500)
        .deleteAll()
        .typeString('partiu? (:')
        .pauseFor(5000)
        .callFunction(showNextButton)
        .pauseFor(200000)
        .start();
    }
  }, []);

  return (
    <div className="home">
      <div id="typeWritingStart" className="type-writing"></div>
      <NextButtonGame showButton={toggleNextButton} path="/first-question" text="começar!" />
    </div>
  );
}

const ValidateAnswer = ({ nextQuestionPath, isAnswerRight, showValidation, rightMessage, wrongMessage }) => {
  if (showValidation) {
    if (isAnswerRight) {
      return (
        <div>
          <p className="question-validation-message">{rightMessage || "Acertou! (:"}</p>
          <NextButtonGame showButton={true} path={"/" + nextQuestionPath} text="próxima!" />
        </div>
      );
    }

    return (
      <p className="question-validation-message wrong">{wrongMessage || "ops, tá errado :("}</p>
    );
  }

  return null;
}

const FirstQuestionRoute = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowValidation(true);
    setIsAnswerRight(day === '13' && month === '10' && year === '2019');
  }

  return (
    <div className="first-question question">
      <h2 className="question-title">Vamos começar fácil (que pra mim é bem difícil): quando começamos a namorar?</h2>

      <form onSubmit={handleSubmit}>
        <input className="question-input day" type="text" placeholder="DD" onChange={e => setDay(e.target.value)} value={day} />
        <input className="question-input month" type="text" placeholder="MM" onChange={e => setMonth(e.target.value)} value={month} />
        <input className="question-input year" type="text" placeholder="YYYY" onChange={e => setYear(e.target.value)} value={year} />
        <input className="question-submit-button" type="submit" value="é isso!" />
      </form>

      <ValidateAnswer
        nextQuestionPath="second-question"
        isAnswerRight={isAnswerRight}
        showValidation={showValidation}
        wrongMessage="Aff, como você errou essa?"
        rightMessage="Boooooa, essa foi fácil, né? haha"
      />
    </div>
  );
}

const SecondQuestionRoute = () => {
  const [answer, setAnswer] = useState('');
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowValidation(true);
    setIsAnswerRight(answer.toLowerCase() == "peru" || answer.toLowerCase() == "perú");
  }

  return (
    <div className="second-question question">
      <h2 className="question-title">--.- ..- .- .-.. / --- / -. --- -- . / -.. --- / .--. .- .. ... / .--. .- .-. .- / --- -. -.. . / .--. .-. --- --. .-. .- -- .- -- --- ... / -. --- ... ... .- / .--. .-. .. -- . .. .-. .- / ...- .. .- --. . -- / .. -. - . .-. -. .- -.-. .. --- -. .- .-..?</h2>

      <form onSubmit={handleSubmit}>
        <input className="question-input" type="text" placeholder="Digite a resposta aqui" onChange={e => setAnswer(e.target.value)} value={answer} />
        <input className="question-submit-button" type="submit" value="aaaacho que é isso..." />
      </form>

      <ValidateAnswer
        nextQuestionPath="third-question"
        isAnswerRight={isAnswerRight}
        showValidation={showValidation}
        wrongMessage="nope! haha dica: as barras (/) representam o espaço entre uma palavra e outra!"
        rightMessage="AEEE! Agora é só jogar Keep Talking and Nobody Explodes. hahaha"
      />
    </div>
  );
}

const ThirdQuestionRoute = () => {
  const [answer, setAnswer] = useState('');
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowValidation(true);
    setIsAnswerRight(answer.toLowerCase() == "angry");
  }

  return (
    <div className="third-question question">
      <h2 className="question-title">So sweet that I get a little _____?</h2>

      <form onSubmit={handleSubmit}>
        <input className="question-input" type="text" placeholder="Digite a resposta aqui" onChange={e => setAnswer(e.target.value)} value={answer} />
        <input className="question-submit-button" type="submit" value="bora ver!" />
      </form>

      <ValidateAnswer
        nextQuestionPath="fourth-question"
        isAnswerRight={isAnswerRight}
        showValidation={showValidation}
        wrongMessage="nope! haha dica: é só uma palavra!"
        rightMessage="SOUR CANDY! YEAH YEAH YEAH YEAH YEAAAH"
      />
    </div>
  );
}

const FourthQuestionRoute = () => {
  const [answer, setAnswer] = useState('');
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowValidation(true);
    setIsAnswerRight(true);
  }

  return (
    <div className="fourth-question question">
      <h2 className="question-title">Resolva: x² – 10.x + 6 = 0</h2>

      <form onSubmit={handleSubmit}>
        <input className="question-input" type="text" placeholder="Digite a resposta aqui" onChange={e => setAnswer(e.target.value)} value={answer} />
        <input className="question-submit-button" type="submit" value="...acertei?" />
      </form>

      <ValidateAnswer
        nextQuestionPath="fifth-question"
        isAnswerRight={isAnswerRight}
        showValidation={showValidation}
        wrongMessage="nope! haha dica: usa bhaskara!"
        rightMessage="essa mulher é crânio demais!"
      />
    </div>
  );
}

const FifthQuestionRoute = () => {
  const [answer, setAnswer] = useState('');
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowValidation(true);
    setIsAnswerRight(answer.toLowerCase() == 'taarlrb');
  }

  return (
    <div className="fifth-question question">
      <h2 className="question-title">Existem 8 caracteres faltando: CDGGDRWHAC _ _ _ _ _ _ _ T</h2>

      <form onSubmit={handleSubmit}>
        <input className="question-input" type="text" placeholder="Digite a resposta aqui, sem espaços" onChange={e => setAnswer(e.target.value)} value={answer} />
        <input className="question-submit-button" type="submit" value="bora ver!" />
      </form>

      <ValidateAnswer
        nextQuestionPath="sixth-question"
        isAnswerRight={isAnswerRight}
        showValidation={showValidation}
        wrongMessage="nope! haha dica: o primeiro caractere é de Cyberpunk 2077 e o último é de The Last of Us 2."
        rightMessage="acertoooou"
      />
    </div>
  );
}

const SixthQuestionRoute = () => {
  const [answer, setAnswer] = useState('');
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowValidation(true);
    setIsAnswerRight(answer.toLowerCase() == 'cloridrato de naratriptana');
  }

  return (
    <div className="sixth-question question">
      <h2 className="question-title">Desembaralhe as letras: LORRCIDATO ED NAPTTRIANARA</h2>

      <form onSubmit={handleSubmit}>
        <input className="question-input" type="text" placeholder="Digite a resposta aqui, com espaços" onChange={e => setAnswer(e.target.value)} value={answer} />
        <input className="question-submit-button" type="submit" value="essa eu sei!" />
      </form>

      <ValidateAnswer
        nextQuestionPath="seventh-question"
        isAnswerRight={isAnswerRight}
        showValidation={showValidation}
        wrongMessage="nope! haha dica: são 3 palavras e ajudam na sua enxaqueca."
        rightMessage="remedinho santo, né? haha"
      />
    </div>
  );
}

const SeventhQuestionRoute = () => {
  const [answer, setAnswer] = useState('');
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowValidation(true);
    setIsAnswerRight(answer.toLowerCase() == "rupaul's drag race" || answer.toLowerCase() == "rupauls drag race");
  }

  return (
    <div className="seventh-question question">
      <h2 className="question-title">Quer assistir alguma coisa? O que?</h2>

      <form onSubmit={handleSubmit}>
        <input className="question-input" type="text" placeholder="Digite a resposta aqui" onChange={e => setAnswer(e.target.value)} value={answer} />
        <input className="question-submit-button" type="submit" value="já sei!" />
      </form>

      <ValidateAnswer
        nextQuestionPath="eighth-question"
        isAnswerRight={isAnswerRight}
        showValidation={showValidation}
        wrongMessage="nope! haha dica: ela já tinha os dela."
        rightMessage="and may the best woman... WIN!"
      />
    </div>
  );
}

const EighthQuestionRoute = () => {
  const [answer, setAnswer] = useState('');
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowValidation(true);
    setIsAnswerRight(answer.toLowerCase() == "convenções");
  }

  return (
    <div className="eighth-question question">
      <h2 className="question-title">Você quer ser um casal conforme os moldes e __________ sociais?</h2>

      <form onSubmit={handleSubmit}>
        <input className="question-input" type="text" placeholder="Digite a resposta aqui, sem espaços" onChange={e => setAnswer(e.target.value)} value={answer} />
        <input className="question-submit-button" type="submit" value="já sei!" />
      </form>

      <ValidateAnswer
        nextQuestionPath="ninth-question"
        isAnswerRight={isAnswerRight}
        showValidation={showValidation}
        wrongMessage="nope! haha dica: pior pedido de namoro já feito"
        rightMessage="obrigado por ter topado! (:"
      />
    </div>
  );
}

const NinthQuestionRoute = () => {
  const [answer, setAnswer] = useState('');
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowValidation(true);
    setIsAnswerRight(answer.toLowerCase() == "bruna romão" || answer.toLowerCase() == "bruna" || answer.toLowerCase() == "eu");
  }

  return (
    <div className="nineth-question question">
      <h2 className="question-title">Diga o nome da mulher mais incrível, inteligente, sensata, competente, carinhosa, sensível e amável que eu já conheci. Sim, você vai ser obrigada a dizer seu próprio nome e concordar com tudo isso se quiser ver seu presente.</h2>

      <form onSubmit={handleSubmit}>
        <input className="question-input" type="text" placeholder="Digite a resposta aqui" onChange={e => setAnswer(e.target.value)} value={answer} />
        <input className="question-submit-button" type="submit" value="bora ver!" />
      </form>

      <ValidateAnswer
        nextQuestionPath="end-game"
        isAnswerRight={isAnswerRight}
        showValidation={showValidation}
        wrongMessage="aff você sabe a resposta!"
        rightMessage="concordo! (:"
      />
    </div>
  );
}

const EndGameRoute = () => {
  const [toggleNextButton, setToggleNextButton] = useState(false);
  const [showTypeEffect, setShowTypeEffect] = useState(false);
  const showNextButton = () => {
    setShowTypeEffect(false);
    setToggleNextButton(true);
  }

  useEffect(() => {
    var app = document.getElementById('typeWritingStart');
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 40
    }, []);

    if (!showTypeEffect) {
      typewriter.typeString('aeee, resolveu tudo!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('bora ver seu presente?')
        .pauseFor(1500)
        .deleteAll()
        .callFunction(showNextButton)
        .pauseFor(200000)
        .start();
    }
  }, []);

  return (
    <div className="end-game">
      <div id="typeWritingStart" className="type-writing"></div>
      <NextButtonGame showButton={toggleNextButton} path="gift" text="abrir meu presente!" />
    </div>
  );
}

const GiftRoute = () => {
  const [toggleNextButton, setToggleNextButton] = useState(false);
  const [showTypeEffect, setShowTypeEffect] = useState(false);
  const showNextButton = () => {
    setShowTypeEffect(false);
    setToggleNextButton(true);
  }

  useEffect(() => {
    var app = document.getElementById('typeWritingStart');
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 32
    }, []);

    if (!showTypeEffect) {
      typewriter.typeString('claro que eu não colocaria o código do gift card aqui! hahaha')
        .pauseFor(1500)
        .deleteAll()
        .typeString('mas vem de zap, que eu te passo!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('espero que você tenha se divertido')
        .pauseFor(1500)
        .deleteAll()
        .typeString('e que goste do presente.')
        .pauseFor(1500)
        .deleteAll()
        .typeString('obrigado por ser essa mulher incrível')
        .pauseFor(1500)
        .deleteAll()
        .typeString('e por me deixar dividar a vida - e esse aniversário - com você!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('também espero que isso tenha ajudado a nos "aproximar" nesse dia, mesmo longe.')
        .pauseFor(1500)
        .deleteAll()
        .typeString('um feliz aniversário, meu amor!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('eu amo você.')
        .pauseFor(200000)
        .start();
    }
  }, []);

  return (
    <div className="gift">
      <div className="box">
        <div className="box-body">
          <img className="img" src="https://www.showmetech.com.br/wp-content/uploads//2020/11/capa-150x150.jpg" />
          <div className="box-lid">
            <div className="box-bowtie"></div>
          </div>
        </div>
      </div>

      <div id="typeWritingStart" className="type-writing gift"></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route path="/first-question">
              <FirstQuestionRoute />
            </Route>

            <Route path="/second-question">
              <SecondQuestionRoute />
            </Route>

            <Route path="/third-question">
              <ThirdQuestionRoute />
            </Route>

            <Route path="/fourth-question">
              <FourthQuestionRoute />
            </Route>

            <Route path="/fifth-question">
              <FifthQuestionRoute />
            </Route>

            <Route path="/sixth-question">
              <SixthQuestionRoute />
            </Route>

            <Route path="/seventh-question">
              <SeventhQuestionRoute />
            </Route>

            <Route path="/eighth-question">
              <EighthQuestionRoute />
            </Route>

            <Route path="/ninth-question">
              <NinthQuestionRoute />
            </Route>

            <Route path="/end-game">
              <EndGameRoute />
            </Route>

            <Route path="/gift">
              <GiftRoute />
            </Route>

            <Route path="/">
              <HomeRoute />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
