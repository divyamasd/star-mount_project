import { SelectInput } from "../../../../components/FormInputs/SelectInput";
import { TextInput } from "../../../../components/FormInputs/TextInput";

export const HeaderSection = (): JSX.Element => {

  const buyerNames = ["Buyer 1", "Buyer 2", "Buyer 3"];
  const purchaseNames = ["Buyer 1", "Buyer 2", "Buyer 3"];
  const oNumbers = ["Order 1", "Order 2", "Order 3"];
  const quantityNumbers = [" 1", " 2", " 3"];
  const uomNumbers = ["1", " 2", " 3"];
  const fabricTypes = ["Type 1",  "Type 2", "Type 3"];
  const prices = ["Type 1",  "Type 2", "Type 3"];

  return (
    <>
      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <SelectInput
            name = "buyer name"
            options={buyerNames}
            placeholder = "Buyer name"
            id = "buyer name"
          />
        </div>
        <div className="flex-1">
         <SelectInput
            name = "order number"
            options={oNumbers}
            placeholder = "Order number"
            id = "order number"
          />
        </div>

        <div className="flex-1">
          <TextInput
           name = "style number"
           placeholder = "Style number"
           id = "style number"
          />
        </div>
        <div className="flex-1">
          <SelectInput
            name = "fabric types"
            options={fabricTypes}
            placeholder = "Fabric types"
            id = "fabric types"
          />
        </div>

      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <SelectInput
            name = "fabric"
            options={fabricTypes}
            placeholder = "Fabric"
            id = "fabric"
          />
        </div>

        <div className="flex-1">
          <SelectInput
            name = "quantity"
            options={quantityNumbers}
            placeholder = "quantity"
            id = "quantity"
          />
        </div>

        <div className="flex-1">
          <SelectInput
            name = "uom"
            options={uomNumbers}
            placeholder = "UOM"
            id = "uom"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name = "price"
            options={prices}
            placeholder = "Price"
            id = "price"
          />
        </div>
      </div>

      <div className="flex w-full items-center gap-3 px-10 py-3">
        <div className="flex-1">
          <TextInput
           name = "discount"
           placeholder = "Discount"
           id = "discount"
          />
        </div>

        <div className="flex-1">
         <SelectInput
            name = "purchase name"
            options={purchaseNames}
            placeholder = "Purchase name"
            id = "purchase name"
          />
        </div>

        <div className="flex-1">
         {/* for spacing */}
        </div>

        <div className="flex-1">
          {/* for spacing */}
        </div>
      </div>
      
    </>
  );
};
