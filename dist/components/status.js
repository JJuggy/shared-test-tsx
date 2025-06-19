import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useMemo } from 'react';
const activeArray = [
    'paid',
    'active',
    'success',
    'checked-in',
    'checked-out',
    'admitable',
    'open',
    'published',
];
const pendingArray = ['pending'];
const failedArray = ['failed', 'expired', 'unpaid', 'in-active', 'un-paid'];
const nutralArray = ['checked-out', 'cancelled', 'draft', 'archived'];
const Status = ({ variant = '' }) => {
    const active = useMemo(() => activeArray.includes(variant?.toLocaleLowerCase()), [variant]);
    const pending = useMemo(() => pendingArray.includes(variant?.toLocaleLowerCase()), [variant]);
    const failed = useMemo(() => failedArray.includes(variant?.toLocaleLowerCase()), [variant]);
    const nutral = useMemo(() => nutralArray.includes(variant?.toLocaleLowerCase()), [variant]);
    return (_jsxs("span", { className: classNames('inline-flex  items-center rounded-xl  px-2.5 py-1 text-[10px] font-medium ring-1 ring-inset capitalize', {
            'bg-green-100/70 text-green-700 ring-green-600/60': active,
            'bg-yellow-100/70 text-yellow-700 ring-yellow-600/60': pending,
            'bg-red-100/70 text-red-700 ring-red-600/60': failed,
            'bg-gray-100/70 text-gray-700 ring-gray-600/60': nutral,
        }), children: [_jsx("span", { className: 'w-1.5 h-1.5 bg-current rounded-full mr-1.5' }), variant?.replace(/-/g, ' ')] }));
};
export default Status;
