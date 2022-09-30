import { Injectable } from '@angular/core';
import { model } from './models';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  setModel(lel: any[]): model[]{
    let n : model[] = []
    for(let i = 0; i < lel?.length; i++){
      const [id, value ] = Object.values(lel[i])
      n.push({id, value})
    }
    return n
  }

  convertModelToFormData(model: any, form: FormData = null!, namespace = ''): FormData {
    let formData = form || new FormData();
    let formKey;

    for (let propertyName in model) {
        if (!model.hasOwnProperty(propertyName) || !model[propertyName]) continue;
        let formKey = namespace ? `${namespace}[${propertyName}]` : propertyName;
        if (model[propertyName] instanceof Date)
            formData.append(formKey, model[propertyName].toISOString());
        else if (model[propertyName] instanceof Array) {
            model[propertyName].forEach((element: any, index: any) => {
                const tempFormKey = `${formKey}[${index}]`;
                this.convertModelToFormData(element, formData, tempFormKey);
            });
        }
        else if (typeof model[propertyName] === 'object' && !(model[propertyName] instanceof File))
            this.convertModelToFormData(model[propertyName], formData, formKey);
        else
            formData.append(formKey, model[propertyName].toString());
    }
    return formData;
  }
}
