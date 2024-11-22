import {{pascalCase name}}Mobile from './{{pascalCase name}}.mobile'
import {{pascalCase name}}Desktop from './{{pascalCase name}}.desktop'

import { useResponsiveComponent } from "@/utils/responsive";

interface IProps {}

 const {{pascalCase name}} = (props: IProps) => {

    const componentProps = {
        
    }

    const Component = useResponsiveComponent({
        mobile: <{{pascalCase name}}Mobile {...componentProps} />,
        web: <{{pascalCase name}}Desktop {...componentProps} />,
      });
      return Component;
};
    
export default {{pascalCase name}};
    