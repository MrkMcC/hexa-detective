import DifficultyConfig from "../../../classes/DifficultyConfig";
import HueDifferenceBias from "../../../enum/colour-generation-bias/HueDifferenceBias";
import IncrementBias from "../../../enum/colour-generation-bias/IncrementBias";
import SaturationBias from "../../../enum/colour-generation-bias/SaturationBias";
import ValueBias from "../../../enum/colour-generation-bias/ValueBias";
import Localise from "../../../services/Localise";
import FunkyPanel from "../../common/FunkyPanel";

interface Props {
  difficulty: DifficultyConfig;
}

const DifficultyBreakdown = ({ difficulty }: Props) => {
  return (
    <FunkyPanel className="difficulty-breakdown">
      <h2 className="border-underline">
        {Localise.Text(`difficulty_${difficulty.key}`)}
      </h2>
      <h3 className="text-center">
        {Localise.Text(`difficulty-description_${difficulty.key}`)}
      </h3>
      <div className="text-center">
        <p>
          Crowd Size - initial: <br />
          {difficulty.parameters.crowdSizeInitial}
        </p>
        <p>
          Crowd Size - Increase per round: <br />
          {difficulty.parameters.crowdSizeInitial}
        </p>
        <p>
          Increment: <br />
          {
            Object.values(IncrementBias)[
              difficulty.parameters.colourGenerationBias.incrementBias
            ]
          }
        </p>
        <p>
          Hue Bias: <br />
          {
            Object.values(HueDifferenceBias)[
              difficulty.parameters.colourGenerationBias.hueDifferenceBias
            ]
          }
        </p>
        <p>
          Saturation Bias: <br />
          {
            Object.values(SaturationBias)[
              difficulty.parameters.colourGenerationBias.saturationBias
            ]
          }
        </p>
        <p>
          Value Bias: <br />
          {
            Object.values(ValueBias)[
              difficulty.parameters.colourGenerationBias.valueBias
            ]
          }
        </p>
      </div>
    </FunkyPanel>
  );
};

export default DifficultyBreakdown;
