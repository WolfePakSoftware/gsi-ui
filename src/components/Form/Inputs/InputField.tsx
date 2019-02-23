import { observer } from 'mobx-react';
import * as React from 'react';
/** Blueprint */
import { IconName, InputGroup, Intent } from '@blueprintjs/core';
/** FieldState */
import { StyledFormGroup } from './style';
import { IFieldProps } from './IFieldProps';
import { FormFieldContainer } from './FormFieldContainer';

/**
 * Field component. Must be an observer.
 */

export interface IInputFieldProps extends IFieldProps {
  leftIcon?: IconName;
  rightElement?: Element;
  round?: boolean;
  fill?: boolean;
}

@observer
export class VInputField extends React.Component<IInputFieldProps> {
  constructor(props: IInputFieldProps) {
    super(props);
  }

  public render() {
    const {
      label,
      labelInfo,
      fieldState,
      leftIcon,
      size,
      disabled,
      inline,
      type,
      placeholder,
      rightElement,
      round,
      id,
      className,
      layer,
      fill
    } = this.props;
    let rightEl;
    if (!rightElement) {
      rightEl = <div />;
    }
    return (
      <StyledFormGroup
        className={className}
        disabled={disabled}
        inline={inline}
        intent={fieldState.hasError ? Intent.DANGER : Intent.NONE}
        labelFor={id}
        labelInfo={labelInfo}
        layer={layer}
        fill={fill}
      >
        <FormFieldContainer label={label} fieldState={fieldState}>
          <InputGroup
            large={size === 'large'}
            small={size === 'small'}
            rightElement={rightEl}
            name={id}
            {...{
              round,
              leftIcon,
              type,
              disabled,
              placeholder,
              id
            }}
            onChange={this.onChange}
            value={fieldState.value || ''}
            intent={fieldState.hasError ? Intent.DANGER : Intent.NONE}
          />
        </FormFieldContainer>
      </StyledFormGroup>
    );
  }

  onChange = (e: any) => {
    this.props.fieldState.onChange(e.target.value);
    if(this.props.onChange){
      this.props.onChange(e.target.value);
    }

  }
}
