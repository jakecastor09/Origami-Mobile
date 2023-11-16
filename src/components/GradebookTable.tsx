import {
  IonCol,
  IonGrid,
  IonItem,
  IonRow,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import React from 'react';

const GradebookTable: React.FC = () => {
  return (
    <>
      <IonGrid className='ion-margin-top'>
        <IonRow>
          <IonCol size='6'>
            <IonItem>
              <IonSelect label='Academic Year' labelPlacement='floating'>
                <IonSelectOption value='apple'>2023-2024</IonSelectOption>
                <IonSelectOption value='banana'>2022-2023</IonSelectOption>
                <IonSelectOption value='orange'>2021-2022</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
          <IonCol size='6'>
            <IonItem>
              <IonSelect label='Semester' labelPlacement='floating'>
                <IonSelectOption value='apple'>1st Semester</IonSelectOption>
                <IonSelectOption value='banana'>2nd Semester</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonSelect label='Quarter' labelPlacement='floating'>
                <IonSelectOption value='apple'>1st Quarter</IonSelectOption>
                <IonSelectOption value='banana'>2nd Quarter</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid>

      {/* Table */}
      <div className='overflow-x-auto mt-4'>
        <table className='table-auto min-w-full border-collapse border border-slate-400'>
          <thead>
            <tr>
              <th className='px-4 py-3 text-grey600 text-xs uppercase border whitespace-nowrap'>
                Learning Area
              </th>
              <th
                className='px-4 py-3 text-grey600 text-xs uppercase border whitespace-nowrap'
                colSpan={2}
              >
                Written Work
              </th>
              <th
                className='px-4 py-3 text-grey600 text-xs uppercase border whitespace-nowrap'
                colSpan={2}
              >
                Performance Task
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Column 1 */}
              <td className='px-4 py-3 bg-grey100 border border-white whitespace-nowrap text-grey800 text-xs'>
                Core Subjects
              </td>
              {/* Column 2 */}
              <td className='px-4 py-3 bg-grey100 border border-white whitespace-nowrap text-grey800 text-xs'>
                Obtained Mark
              </td>
              <td className='px-4 py-3 bg-grey100 border border-white whitespace-nowrap text-grey800 text-xs'>
                Highest Mark
              </td>
              {/* Column 3 */}
              <td className='px-4 py-3 bg-grey100 border border-white whitespace-nowrap text-grey800 text-xs'>
                Obtained Mark
              </td>
              <td className='px-4 py-3 bg-grey100 border border-white whitespace-nowrap text-grey800 text-xs'>
                Highest Mark
              </td>
            </tr>
            <tr>
              {/* Column 1 */}
              <td className='px-4 py-3 text-xs  border  text-grey800'>
                Oral Communication In Context
              </td>
              {/* Column 2 */}
              <td className='px-4 py-3 text-xs  text-center font-bold border  text-grey800'>
                15
              </td>
              <td className='px-4 py-3 text-xs  text-center font-bold border  text-grey800'>
                20
              </td>
              {/* Column 3 */}
              <td className='px-4 py-3 text-xs  text-center font-bold border  text-grey800'>
                15
              </td>
              <td className='px-4 py-3 text-xs  text-center font-bold border  text-grey800'>
                20
              </td>
            </tr>
            <tr>
              {/* Column 1 */}
              <td className='px-4 py-3 text-xs  border  text-grey800'>
                Oral Communication In Context
              </td>
              {/* Column 2 */}
              <td className='px-4 py-3 text-xs  text-center font-bold border  text-grey800'>
                15
              </td>
              <td className='px-4 py-3 text-xs  text-center font-bold border  text-grey800'>
                20
              </td>
              {/* Column 3 */}
              <td className='px-4 py-3 text-xs  text-center font-bold border  text-grey800'>
                15
              </td>
              <td className='px-4 py-3 text-xs  text-center font-bold border  text-grey800'>
                20
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GradebookTable;
