import React from "react";
import TextField from "@mui/material/TextField";
// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";
import { Controller, useFormContext } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import FormControl from "@mui/material/FormControl";
const DATE_FORMAT = "dd-MMM-yy";


export const FormInputDate = ({ name, control, label }: FormInputProps) => {
  return (
     <FormControl sx={{borderRadius:'10px',width:'350px'}}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          <TextField
           sx={{borderRadius:"10px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}
            fullWidth
            type="date"
            // variant="inline"
            defaultValue={new Date()}
            id={`date-${Math.random()}`}
            label={label}
            // rifmFormatter={(val) => val.replace(/[^[a-zA-Z0-9-]*$]+/gi, "")}
            // refuse={/[^[a-zA-Z0-9-]*$]+/gi}
            // autoOk
            // KeyboardButtonProps={{
            //   "aria-label": "change date",
            // }}
            // format={DATE_FORMAT}
            {...field}
          />
        )}
      />
      </FormControl>
  )
};