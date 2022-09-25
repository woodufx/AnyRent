export interface IValueProps {
    startTime: number;
    endTime: number;
}

export interface IARTimeFormProps {
    value: IValueProps;
    onChange: (time: number) => void;
    getValues?: (value: IValueProps) => void;
}

export interface IARTimePickerProps {
    onChange?: (timeValue:IValueProps) => void;
}
